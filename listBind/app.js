const { createApp } = Vue;

createApp({
  data: function () {
    return {
      name: "hello",
      newSkill: "",
      skills: ["React", "javascript", "Html", "MERN Stack"],
      persons: [
        { name: "shofol", age: 24 },
        { name: "shanto", age: 25 },
        { name: "sohan", age: 23 },
      ],
      newPerson: {},
    };
  },
  methods: {
    addNew() {
      if (this.newSkill) {
        this.skills.push(this.newSkill);
        this.newSkill = "";
      }
    },
    removeSkill(i) {
      this.skills.splice(i, 1);
    },
    addPerson() {
      this.persons.push({ name: this.newPerson.name, age: 23 });
      this.newPerson = "";
    },
    removePerson(i) {
      this.persons.splice(i, 1);
    },
  },
}).mount("#app");
