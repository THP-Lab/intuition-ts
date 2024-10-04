import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: [
    {
      [`${process.env.HASURA_PROJECT_ENDPOINT}`]: {
        headers: {
          'x-hasura-admin-secret': `${process.env.HASURA_GRAPHQL_ADMIN_SECRET}`,
        },
      },
    },
  ],
  documents: 'app/lib/graphql/queries/**/*.graphql',
  generates: {
    'app/lib/graphql/generated/graphql/': {
      preset: 'client',
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
}

export default config
