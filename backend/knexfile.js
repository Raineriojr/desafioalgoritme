// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      database: 'desafio',
      user: 'root',
      password: 'meta2020'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    seeds:{
      directory: './src/database/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
