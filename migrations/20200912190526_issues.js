const createIssuesTableSQL = `
    CREATE TABE issue (
      id text PRIMARY KEY NOT NULL UNIQUE,
      name text NOT NULL,
      description text NOT NULL,
      "chamberLink" text,
      "projectLink" text,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    )
`

exports.up = function (knex) {
  knex.schema.createTable("issues", function (table) {
    return knex.schema.raw(createIssuesTableSQL)
  })
}

exports.down = function (knex) {}
