const express = require('express');

const app = express();

app.post('/user', (req, res) => {
 return res.json({
   evento: "semana nova"
 });
});

app.listen(3333); 

