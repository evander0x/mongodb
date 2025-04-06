const mongoose = require("mongoose");
const { User, Operation } = require("./models");

const test = async () => {
  const user = await User.updateOne(
    {
      _id: "5ed093872e3da2b6549834d8",
    },
    {
      name: "白小明",
    },
    {
      runValidators: true,
    }
  );

  console.log(user);
};

test();
