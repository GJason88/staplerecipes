export async function getAllHelper(req, res, query, fn=(x) => x) {
    try {
        const jsonResponse = await query();
        res.json(fn(jsonResponse));
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
};
