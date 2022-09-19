const express = require("express");
app = express();

const docClient = require('./config/DBConfig')


app.use(express.json({ extended: false }))
app.use(express.static('./views'))
app.set("view engine", "ejs");
app.set('views', './views')




const tblSanPham = "SanPham";


app.get("/", function(req, res) {
    const params = {
        TableName: tblSanPham
    };

    docClient.scan(params, (err, data) => {
        if (err) {
            res.send("Internal Server Error")
        } else {
            return res.render('index', { sanPhams: data.Items })
        }
    })
});


app.listen(4000, function() {
    console.log("Server is running on port 4000 ");
});