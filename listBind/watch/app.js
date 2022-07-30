const { createApp } = Vue;
createApp({
  data: function () {
    return {
      phone: "",
      name: {
        firstName: "",
        lastName: "",
      },
    };
  },
  watch: {
    phone(newPhone, oldPhone) {
      if (isNaN(newPhone)) {
        alert("enter a valid number");
        this.phone = oldPhone;
      }
    },
    // "name.firstName": function (newName, oldName) {
    //   console.log(newName, oldName);
    // },
    name: {
      deep: true,
      handler: function (newValue, old) {
        console.log(newValue, old);
      },
    },
  },
}).mount("#app");
