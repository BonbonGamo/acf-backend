const createCauseTableSQL = `
    CREATE TABE cause (
      id text PRIMARY KEY NOT NULL UNIQUE,
      "issueId" text NOT NULL,
      "parentIssueId" text NOT NULL,
      description text NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    )
`

exports.up = function (knex) {
  knex.schema.createTable("issues", function (table) {
    return knex.schema.raw(createCauseTableSQL)
  })
}

exports.down = function (knex) {}
