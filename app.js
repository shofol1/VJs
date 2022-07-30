const { createApp } = Vue;

createApp({
  data: function () {
    return {
      message: "hello",
      name: "",
      info: {
        name: ["shofol", "shanto"],
        gitLink: "https://github.com/shofol1/VJs",
      },
      count: 0,

      html_code:
        '<a target="_blank" href="https://github.com/shofol1/VJs">Go to gitHub</a>',
    };
  },
  methods: {
    increment(amount) {
      this.count = this.count + amount;
    },
    decrement() {
      this.count = this.count - 1;
    },
    test(event) {
      console.log(event.target.value);
      this.name = event.target.value;
    },
  },
}).mount("#app");

const myJson = {
  name: "shofol",
  color: ["red", "green", "yellow"],
  persons: [
    { name: "shofol", address: [{ one: "saidpure", two: "dhaka" }] },
    { name: "shanto", address: "Kustia" },
    { name: "sohan", address: "Dhaka" },
  ],
};
myJson.persons[0].address.map((a) => console.log(a.one));

const start = () => console.log("start");
const process = (calback) => {
  setTimeout(() => {
    console.log("process");
    calback();
  }, 3000);
};
const end = () => console.log("end");

start();
const callback = () => {
  end();
};
process(callback);
