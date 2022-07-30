const { createApp } = Vue;

createApp({
  data: function () {
    return {
      activeClass: "red",
      textColor: "white",
      bgColor: "green",
    };
  },
  methods: {
    setColor(color) {
      this.activeClass = color;
    },
  },
}).mount("#app");
