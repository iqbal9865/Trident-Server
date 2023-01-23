class HomeController {
    index(req, res) {
        let users = ["Sajon", "Iqbal"];
        res.render('error', {users})
    }
}

module.exports = {
    homeController: new HomeController()
}