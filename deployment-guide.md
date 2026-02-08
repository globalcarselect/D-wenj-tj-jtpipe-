# Deployment Configuration for Alibaba Cloud

## Docker Configuration

### Dockerfile
```Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED=1

RUN yarn build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD ["node", "server.js"]
```

### docker-compose.yml
```yaml
version: '3.8'

services:
  app:
    build:
      context: .
      target: runner
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
    # Optional: Add health check
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost:3000/health"]
      interval: 30s
      timeout: 5s
      retries: 3
      start_period: 30s
```

## Alibaba Cloud Deployment Steps

### 1. Container Registry Setup
1. Log into Alibaba Cloud Container Registry (ACR)
2. Create a namespace and repository for the application
3. Tag and push the Docker image:

```bash
# Build the image
docker build -t jtpipeline-website:latest .

# Tag the image for ACR
docker tag jtpipeline-website:latest <your-acr-registry>/jtpipeline/jtpipeline-website:latest

# Push to ACR
docker push <your-acr-registry>/jtpipeline/jtpipeline-website:latest
```

### 2. Container Service for Kubernetes (ACK) Deployment
Create deployment.yaml:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: jtpipeline-website
  labels:
    app: jtpipeline-website
spec:
  replicas: 3
  selector:
    matchLabels:
      app: jtpipeline-website
  template:
    metadata:
      labels:
        app: jtpipeline-website
    spec:
      containers:
      - name: jtpipeline-website
        image: <your-acr-registry>/jtpipeline/jtpipeline-website:latest
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
---
apiVersion: v1
kind: Service
metadata:
  name: jtpipeline-website-service
spec:
  selector:
    app: jtpipeline-website
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
  type: LoadBalancer
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: jtpipeline-website-ingress
  annotations:
    kubernetes.io/ingress.class: "nginx"
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
spec:
  tls:
  - hosts:
    - www.jtpipeline.com
    - jtpipeline.com
    secretName: jtpipeline-tls
  rules:
  - host: www.jtpipeline.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: jtpipeline-website-service
            port:
              number: 80
  - host: jtpipeline.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: jtpipeline-website-service
            port:
              number: 80
```

### 3. Environment Variables
Create a ConfigMap for environment variables:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: jtpipeline-config
data:
  NEXT_PUBLIC_SITE_URL: "https://www.jtpipeline.com"
  NEXT_PUBLIC_API_BASE_URL: "https://api.jtpipeline.com"
  # Add other public environment variables
---
apiVersion: v1
kind: Secret
metadata:
  name: jtpipeline-secrets
type: Opaque
data:
  # Base64 encoded values
  DATABASE_URL: <base64-encoded-db-url>
  SOCIAL_MEDIA_ACCESS_TOKEN: <base64-encoded-token>
  SMTP_PASSWORD: <base64-encoded-smtp-password>
```

### 4. CDN Configuration
1. Configure Alibaba Cloud CDN to cache static assets
2. Set up caching rules for optimal performance
3. Enable HTTPS with SSL certificates

### 5. Monitoring and Logging
1. Set up Alibaba Cloud Application Real-Time Monitoring Service (ARMS)
2. Configure CloudMonitor for infrastructure monitoring
3. Enable logging with SLS (Log Service)

## Additional Configuration Files

### .env.production
```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://www.jtpipeline.com
DATABASE_URL=postgresql://user:password@host:port/database
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=user@example.com
SMTP_PASSWORD=password
SOCIAL_MEDIA_FACEBOOK_TOKEN=your_token
SOCIAL_MEDIA_LINKEDIN_TOKEN=your_token
SOCIAL_MEDIA_INSTAGRAM_TOKEN=your_token
```

### next.config.js (Production)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['www.jtpipeline.com', 'cdn.jtpipeline.com', 'images.unsplash.com'],
    formats: ['image/webp'],
  },
  async redirects() {
    return [
      // Redirect www to non-www
      {
        source: 'https://www.jtpipeline.com/:path*',
        destination: 'https://jtpipeline.com/:path*',
        permanent: true
      },
      // Redirect HTTP to HTTPS
      {
        source: 'http://jtpipeline.com/:path*',
        destination: 'https://jtpipeline.com/:path*',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
```

## Deployment Commands

### Manual Deployment
```bash
# Build the application
npm run build

# Test the build locally
npm start

# Deploy to Alibaba Cloud
# Follow the steps in the deployment guide
```

### CI/CD Pipeline
Consider setting up a CI/CD pipeline using Alibaba Cloud DevOps to automate deployments.