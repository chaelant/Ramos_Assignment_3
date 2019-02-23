const mainRoutes = require('./main');

const constructorMethod = app => {
    app.use('/', mainRoutes);

    app.use('*', (req, res) => {
        res.sendStatus(404);
    })
};

module.exports = constructorMethod;
