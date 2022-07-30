const { createApp } = Vue;

createApp({
  data: function () {
    return {
      message: "hello",
      info: {
        name: ["shofol", "shanto"],
      },
    };
  },
}).mount("#app");
