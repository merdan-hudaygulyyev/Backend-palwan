const mongoose = require("mongoose")

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Maglumat bazasyna baglandy !");
    })
    .catch((err) => {
        console.log("Maglumat bazasyna baglanmady : ", err);
    })