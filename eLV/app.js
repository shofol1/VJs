const { createApp } = Vue;

createApp({
  data: function () {
    return {
      log: {
        x: 0,
        y: 0,
      },
      name: "shofol",
    };
  },
  methods: {
    over(e) {
      this.log.x = e.offsetX;
      this.log.y = e.offsetY;
    },
  },
}).mount("#app");
