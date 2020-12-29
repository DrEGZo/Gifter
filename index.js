let app = require('express')();

let giftbag = require('./giftbag.json');

app.get('/gift.gif', (req, res) => {
    res.sendFile(__dirname + '/gift.gif');
});

app.get(['/data/:id', '/data'], (req, res) => {
    let id = req.params.id || 'nonexistent';
    if ((!(id in giftbag)) || id == 'nonexistent') res.json({
        g: '(Hier würde jetzt stehen, was das Geschenk ist, wenn du einen gültigen Link eingegeben hättest)',
        p: 'https://images.derstandard.at/2018/03/19/Fragezeichen.jpg'
    });
    else res.json(giftbag[id]);
});

app.get(['/:id', '/'], (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

module.exports = app;