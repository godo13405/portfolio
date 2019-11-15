const sharp = require("sharp"),
  fs = require("fs"),
  path = require("path"),
  params = {
    src: "./content/img/post",
    width: 1000,
    height: 1000
  };

fs.readdir(params.src, function(err, files) {
  files = files.filter(el => /\.(png|jpg|jpeg)$/.test(el));
  files.forEach(function(file) {
    const imgPath = path.join(
      params.src,
      "/",
      file
        .split(".")
        .slice(0, -1)
        .join(".")
    );
    sharp(imgPath)
      .resize(params.width, params.height)
      .toFile(imgPath, (err, info) => {
        console.log(imgPath + " resized");
      });
    sharp(imgPath).toFile(`${imgPath}.webp`, (err, info) => {
      console.log(imgPath + " to WEBP");
    });
  });
});
