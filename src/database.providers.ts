import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection(
      {

        "type": "mssql",
        "host": process.env.SERVER,
        "port": 1433,
        "username": process.env.USER,
        "password": process.env.PASSWORD,
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