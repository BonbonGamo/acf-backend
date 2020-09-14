// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection:
      "postgres://hdwonbjcarnung:d6cff76dadd3537dd3e7d5c4a899121fee1666915fcc9df2942de479837b9e3b@ec2-46-137-124-19.eu-west-1.compute.amazonaws.com:5432/djo508p922cf9",
  },

  staging: {
    client: "postgresql",
    connection: {
      url: process.env.DB_URL,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      url: process.env.DB_URL,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
}
