class NewsController {
    //[GET] /news
    index(req, res) {
        //res.send('Hello World!');
        //res.render('C:\Users\tutra\Desktop\Example_nodejs\blog\src\resources\views\home.hbs');
        res.render('news');
    }

    //GET news/:slug
    show(req, res) {
        res.send('NEWS DETAIL!!!');
    }
}

module.exports = new NewsController();
