import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection(
      {

        "type": "mssql",
        "host": "localhost",
        "port": 1433,
        "username": "sa",
        "password": ".",
        "database": "risc_2030",
        "synchronize": false,
        "logging": false,
        "entities": [
          "dist/entidades/**/*{.ts,.js}"
        ],
        "migrations": [
          "src/migration/**/*.ts"
        ],
        "subscribers": [
          "src/subscriber/**/*.ts"
        ]


      })
  }
];