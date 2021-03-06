import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors({
    origin: "http://localhost:PORT"
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true

}));

app.get('/get-request', (req, res) => {
    res.send({response: true});
});

app.post('/post-request', (req, res) => {
    let body = req.body;
    res.send({postRequestResponse: 'This is the POST response'});
});

var server = app.listen(PORT, () => {console.log('Serve started on port ' + PORT)});
export default server;

