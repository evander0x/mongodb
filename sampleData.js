const { User, Operation } = require("./models");

// Sample Users
const users = [
  {
    loginId: "user1",
    loginPwd: "password123",
    name: "张三",
    loves: ["读书", "游泳"],
    address: {
      province: "北京",
      city: "北京",
      detail: "朝阳区建国路88号",
    },
  },
  {
    loginId: "user2",
    loginPwd: "password456",
    name: "李四",
    loves: ["音乐", "旅游"],
    address: {
      province: "上海",
      city: "上海",
      detail: "浦东新区陆家嘴1号",
    },
  },
  {
    loginId: "user3",
    loginPwd: "password789",
    name: "王五",
    loves: ["编程", "篮球"],
    address: {
      province: "广东",
      city: "深圳",
      detail: "南山区科技园",
    },
  },
];

// Function to create users and their operations
async function createSampleData() {
  try {
    // Create users
    const createdUsers = await User.insertMany(users);
    console.log("Users created successfully");

    // Create operations for each user
    const operations = [];
    for (const user of createdUsers) {
      // Create 3 operations for each user
      for (let i = 0; i < 3; i++) {
        operations.push({
          operation: ["登录", "注销", "阅读文章"][i],
          time: new Date(),
          userid: user._id,
          extraInfo: {
            browser: "Chrome",
            ip: "192.168.1." + (i + 1),
          },
          address: user.address, // Using the same address as user
        });
      }
    }

    await Operation.insertMany(operations);
    console.log("Operations created successfully");
  } catch (error) {
    console.error("Error creating sample data:", error);
  }
}

// Export the function to be used
module.exports = createSampleData;
