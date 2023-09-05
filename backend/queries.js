import db from './db.configs.js';

export async function queryTestTable() {
    let response = {};
    try {
        response = await db.any('SELECT * FROM test_table;');
        return response;
    } catch (e) {
        console.log(e);
    }
    return response;
}
