import pgPromise from 'pg-promise';

const pgp = pgPromise();

const cn = {
    host: process.env.DATABASE_URL,
    port: 5432,
    database: 'postgres',
    max: 30, // use up to 30 connections

    // "types" - in case you want to set custom type parsers on the pool level
};

export const userDB = pgp({ ...cn, user: 'client', password: 'user' });
export const adminDb = pgp({ ...cn, user: 'admin', password: 'admin' });
