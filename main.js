const port = 3000,
    express = require("express"),
    app = express();

app.get("/user/:id", (req, res, next) => {
    if (req.params.id === '0') next('route');
    else next();
}, (req, res, next) => {
    res.send('regular');
});

app.get("/user/:id", (req, res, next) => {
    res.send('special');
});

app.get("/", (req, res) => {
        console.log(req.params);
        console.log(req.body);
        console.log(req.url);
        console.log(req.query);
        res.send("Hello,Universe!");
    })
    .listen(port, () => {
        console.log(
            `The Express.js server has started and is listening on port number: ${port}`
        );
    });