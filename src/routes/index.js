const newsRouter = require('./news');
const homeRouter = require('./home');
const searchRouter = require('./search');

const siteRouter = require('./site');
function route(app) {
    //[/slug]
    //Gọi phương thức GET http protocol, tạo tuyến đường res.send
    // app.get('/', (req, res) => {
    //     //res.send('Hello World!');
    //     //res.render('C:\Users\tutra\Desktop\Example_nodejs\blog\src\resources\views\home.hbs');
    //     res.render('home');

    // })

    /*HOME*/
    // app.get('/home', (req, res) => {
    //     //res.send('Hello World!');
    //     //res.render('C:\Users\tutra\Desktop\Example_nodejs\blog\src\resources\views\home.hbs');
    //     res.render('home');
    // })

    //app.use('/home', homeRouter);

    /*NEWS*/
    // app.get('/news', (req, res) => {
    //     //res.send('Hello World!');
    //     //res.render('C:\Users\tutra\Desktop\Example_nodejs\blog\src\resources\views\home.hbs');
    //     res.render('news');

    // })

    app.use('/news', newsRouter);
    app.use('/', siteRouter);

    /**Search*/
    // app.get('/search', (req, res) => {
    //     //res.send('Hello World!');
    //     //res.render('C:\Users\tutra\Desktop\Example_nodejs\blog\src\resources\views\home.hbs');
    //     console.log(req.query.auth);
    //     res.render('search');

    // })
    //app.use('/search', searchRouter)

    // app.post('/search', (req, res) => {
    //     //res.send('Hello World!');
    //     //res.render('C:\Users\tutra\Desktop\Example_nodejs\blog\src\resources\views\home.hbs');
    //     console.log(req.body);
    //     res.send('');

    // })
}

module.exports = route;
