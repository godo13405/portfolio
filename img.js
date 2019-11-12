const imagemin = require("imagemin");
const webp = require("imagemin-webp");

imagemin(["content/img/*.png"], "content/img", {
  use: [
    webp({
      quality: 75
    })
  ]
}).then(function() {
  console.log("Images converted!");
});
