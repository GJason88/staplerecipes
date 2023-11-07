import pgPromise from 'pg-promise';

const pgp = pgPromise();

export const pgpHelpers = {
    createCondition: (column, value) =>
        pgp.as.format(' WHERE $1 = $2', [column, value]),
    table: (table, schema) =>
        new pgp.helpers.TableName({
            table,
            schema,
        }),
    columns: (colNames) => {
        const cols = colNames.map((name) => new pgp.helpers.Column(name));
        return new pgp.helpers.ColumnSet(cols);
    },
};
