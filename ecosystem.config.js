module.exports = {
  apps: [{
    name: "jtpipeline",
    script: "npm",
    args: "start",
    cwd: "D:/wenj/独立站/tj-jtpipe/DM",
    instances: 1,
    exec_mode: "fork",
    env: {
      NODE_ENV: "production",
      PORT: 3000
    },
    error_file: "./logs/err.log",
    out_file: "./logs/out.log",
    log_file: "./logs/combined.log",
    time: true,
    watch: false
  }]
}
