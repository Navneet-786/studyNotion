const mongoose = require("mongoose")

exports.connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlparser: true,
      useUnifiedTopology: true,
    })
    .then(console.log(`DB Connection Success`))
    .catch((err) => {
      console.log(`DB Connection Failed`)
      console.log(err)
      process.exit(1)
    })
}
