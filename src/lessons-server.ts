declare const require;


var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
import {lessonsData} from "./lessons";


var app = express();

app.use(express.static('.'));
app.use(bodyParser.json());
app.use(bodyParser.text());


const lessons = lessonsData;


app.route('/lessons')
    .get((req, res) => {
        res.status(200).json(lessons);
    });


var server = app.listen(8080, function() {
    console.log("Server running at http://localhost:" + server.address().port);
});

