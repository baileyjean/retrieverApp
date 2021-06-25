require('dotenv').config()

module.exports = {
  development: {
    database: 'retrieverDB_development',
    dialect: 'postgres'
  },
  test: {
    database: 'retrieverDB_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
