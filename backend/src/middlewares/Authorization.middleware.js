import auth from '../configs/firebase.config.js';

const createAuthMiddleware = (admin) => async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization?.split(' ');
        if (authHeader?.[0] === 'Bearer' && authHeader[1]) {
            const decodedToken = await auth.verifyIdToken(authHeader[1]);
            if (decodedToken && (!admin || decodedToken.admin == true)) {
                res.locals.uid = decodedToken.uid;
                return next();
            }
        }
        return res.status(401).send('Unauthorized');
    } catch (e) {
        console.log(e);
        return res.status(403).send('Internal Error');
    }
};

export const adminAuth = createAuthMiddleware(true);

export const userAuth = createAuthMiddleware(false);
