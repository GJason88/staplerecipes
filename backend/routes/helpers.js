export async function getAllHelper(req, res, fn) {
    try {
        const jsonResponse = await fn();
        res.json(jsonResponse);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
};
