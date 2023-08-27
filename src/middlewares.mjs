import routes from './routes.mjs';

export const localsMiddleWare = (req, res, next) => {
    res.locals.appName = 'MyTube';
    res.locals.routes = routes;
    next();
};