exports.myMiddleware = (req, res, next) => {
  req.name = 'Thales';
  if (req.name === 'Thales') {
    throw Error('That is a stupid name');
  } 
  next();
};
exports.homePage = (req, res) => {
  res.render('index');
};