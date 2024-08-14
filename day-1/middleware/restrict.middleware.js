const restrict = (req, res, next) => {
  if (req.url == "/") {
    next();
  } else {
    res.send({ msg: "you are not authorized" });
  }
};

module.exports = { restrict };
