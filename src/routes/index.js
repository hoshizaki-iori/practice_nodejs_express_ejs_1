const dbCon = require("../connection/connection");

module.exports = {
    getIndex : (req, res)=>{
        res.render('index.ejs' , {
            title: "Index",
            data: ''
        })
    },

}