const devConfig = {
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port: '5432',
    user : '...DB USERNAME...',
    password : '...DB USERNAME PASSWORD...',
    database : '...DB NAME...'
  },
  migrations: {
    directory: './src/database/migrations'
  },
  seeds: {
    directory: './src/database/seeds'
  }
}


module.exports = {
  development: devConfig,
  production: {}
}
