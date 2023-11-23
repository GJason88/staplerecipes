import auth from '../configs/firebase.config.js';

export const adminAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization?.split(' ');
        if (authHeader && authHeader[0] === 'Bearer' && authHeader[1]) {
            const decodedToken = await auth.verifyIdToken(authHeader[1]);
            if (decodedToken && decodedToken.admin === true) {
                return next();
            }
        }
        return res.status(401).send('Unauthorized');
    } catch (e) {
        console.log(e);
        return res.status(403).send('Internal Error');
    }
};
