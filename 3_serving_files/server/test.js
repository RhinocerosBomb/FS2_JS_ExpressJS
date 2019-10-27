const express = require('express')
const appServer = express()
const port = 80
appServer.use(express.static('../client'))
appServer.get('/add', (req, res) =>
  res.json({
    result: parseInt(req.query.num1, 10) + parseInt(req.query.num2)
  }));
appServer.get('/mul', (req, res) =>
  res.json({
    result: parseInt(req.query.num1, 10) * parseInt(req.query.num2)
  }));
appServer.get('/div', (req, res) =>
  res.json({
    result: parseInt(req.query.num1, 10) / parseInt(req.query.num2)
  }));
appServer.listen(port, () => console.log(`Ok on port ${port}`))
