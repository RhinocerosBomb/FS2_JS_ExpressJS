const express = require('express')
const appServer = express()
const port = 80

const isAuthenticated = (req, res, next) => {
  if(!(req.header('isAllowed') === 'true')) {
    res.status(401).send('please log in');
  } else {
    next();
  }
}
appServer.use(express.static('../client'))

appServer.get('/add', isAuthenticated, (req, res) =>
  res.json({
    result: parseInt(req.query.num1, 10) + parseInt(req.query.num2)
  })
);

appServer.get('/mul', (req, res) =>
  res.json({
    result: parseInt(req.query.num1, 10) * parseInt(req.query.num2)
  })
);

appServer.get('/div', isAuthenticated, (req, res) =>
  res.json({
    result: parseInt(req.query.num1, 10) / parseInt(req.query.num2)
  })
);

appServer.listen(port, () => console.log(`Ok on port ${port}`))

appServer.use(function (req, res, next) {
 res.status(404).send("File Not Found")
})
