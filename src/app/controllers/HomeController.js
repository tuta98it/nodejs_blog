class HomeController {
    index(req, res) {
        // GET [home]
        res.render('home');
    }
}

module.exports = new HomeController();
