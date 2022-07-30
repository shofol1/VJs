const { createApp } = Vue;

createApp({
  data: function () {
    return {
      log: {
        x: 0,
        y: 0,
      },
      nameP: "shofol",
      condition: "",
      persons: ["shofol", "shanto", "sohan"],
      hotels: [
        {
          name: "peach-valley",
          roomNo: "420",
          person: 2,
        },
        {
          name: "water-valley",
          roomNo: "420",
          person: 2,
        },
        {
          name: "Nicee-valley",
          roomNo: "420",
          person: 2,
        },
      ],
    };
  },
  methods: {
    over(e) {
      this.log.x = e.offsetX;
      this.log.y = e.offsetY;
    },
    modifier(e) {
      console.log("enter btn clicked");
    },
    makeTrue() {
      this.condition = true;
    },
    makeFalse() {
      this.condition = false;
    },
  },
}).mount("#app");
