const path = require("path")
const express = require('express')
const morgan = require("morgan")
const { engine } = require("express-handlebars")
const app = express()
const port = 3000
/* template engines */
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "./resource/views"))
/* config asset link static */
app.use(express.static(path.join(__dirname, "public"))) //http://localhost:3000/img/logo.png
/* when browser send data to server by post we need get body more information at readme  */
app.use(express.urlencoded({
    express: true
}));
app.use(express.json());


/* http logger */
//app.use(morgan("combined"))//partials




app.get('/', (req, res) => {
    res.render(`home`)
})
app.get('/news', (req, res) => {
    res.render(`news`)
})
app.get('/search', (req, res) => {
    console.log(req.query);
    res.render(`search`)
})
app.post("/search", function (req, res) {
    res.send("")
    console.log(req.body);
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})