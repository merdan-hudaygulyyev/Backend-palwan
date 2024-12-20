const router = require("express").Router();
const multer = require("multer");
const upload = require("../middlewares/lib/upload");
const APIError = require("../utils/errors");
const Response = require("../utils/response");

const auth = require("../app/auth/router");
const user = require("../app/users/router");

router.use(auth);
router.use(user);

router.post("/upload", function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError)
      throw new APIError(
        "Surat ýüklenýän wagty Multer sebäpli ýalňyşlyk döredi : ",
        err
      );
    else if (err) throw new APIError("Surat ýüklenýän wagty ýalňyşlyk döredi : ", err);
    else return new Response(req.savedImages, "Surat ýüklendi").success(res);
  });
});

module.exports = router;
