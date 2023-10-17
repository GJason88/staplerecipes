import pgPromise from "pg-promise";

const pgp = pgPromise();

export const pgpHelpers = {
    createCondition: (column, value) =>
    pgp.as.format(' WHERE $1 = $2', [column, value]);
};
