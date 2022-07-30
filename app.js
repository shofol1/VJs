const { createApp } = Vue;

createApp({
  data: function () {
    return {
      message: "hello",
      info: {
        name: ["shofol", "shanto"],
        gitLink: "https://github.com/shofol1/VJs",
      },
    };
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
