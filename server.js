const express = require('express');
const app = express();

app.get('/add/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const result = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is ${result}`);
  });

app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
  