module.exports = {
  apps: [
    {
      name: 'preview-server',
      script: 'preview-server.cjs',
      cwd: '/home/user/oncologia-platform-v3',
      env: {
        NODE_ENV: 'development',
        PORT: 3001
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork'
    }
  ]
}