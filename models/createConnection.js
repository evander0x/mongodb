const mongoose = require("mongoose");
// mongoose.set("useCreateIndex", true);

// 如果mongodb 在远程的话，localhost 需要换成远程的ip

mongoose.connect("mongodb://localhost/test", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

mongoose.connection.on("open", () => {
  console.log("连接已打开");
});
