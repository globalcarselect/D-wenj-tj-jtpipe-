const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const host = '0.0.0.0';

const server = http.createServer((req, res) => {
    // Default to index.html for root requests
    let filePath = req.url === '/' ? '/index.html' : req.url;
    filePath = path.join(__dirname, 'public', filePath);
    
    // Check if file exists
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // Fallback to index.html if file not found
            fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
                if (err) {
                    res.writeHead(404, {'Content-Type': 'text/plain'});
                    res.end('404 Not Found');
                } else {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(data);
                }
            });
        } else {
            // Set appropriate content type based on file extension
            const ext = path.extname(filePath);
            let contentType = 'text/html';
            
            switch (ext) {
                case '.css':
                    contentType = 'text/css';
                    break;
                case '.js':
                    contentType = 'application/javascript';
                    break;
                case '.png':
                    contentType = 'image/png';
                    break;
                case '.jpg':
                case '.jpeg':
                    contentType = 'image/jpeg';
                    break;
                case '.json':
                    contentType = 'application/json';
                    break;
            }
            
            res.writeHead(200, {'Content-Type': contentType});
            res.end(data);
        }
    });
});

server.listen(port, host, () => {
    console.log('🚀 CN-PIPES网站服务器已启动');
    console.log(`🌐 本地访问: http://localhost:${port}`);
    console.log(`🌐 网络访问: http://172.29.17.41:${port}`);
    console.log(`🌐 域名访问: http://cn-pipes.com:${port}`);
    console.log('📁 服务目录: C:\\Users\\Adim\\cn-pipes\\public');
});