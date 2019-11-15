const sharp = require("sharp"),
  fs = require("fs"),
  path = require("path"),
  params = {
    src: "./content/img/post",
    width: 1000,
    height: 1000
  };

fs.readdir(params.src, function(err, files) {
  files = files.filter(el => /\.(webp)$/.test(el));
  files.forEach(function(file) {
    fs.unlink(file, err => {
      if (err) throw err;
    });
  });
});
