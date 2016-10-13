import express from 'express';

const app = express();

app.use('/', express.static('public'));

const PORT = 3000;
app.listen(process.env.PORT || PORT, () => {
    console.log("Listening on PORT", PORT);
});
