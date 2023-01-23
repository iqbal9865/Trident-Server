const { db } = require("../config/database");

class Image {
    uploadImage(query, values, callback) {
        db.query(query, values, callback)
    }
}

module.exports = { Image };