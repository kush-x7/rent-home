module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "light-purple": "#E8E6F8",
        "primary-purple": "#7065EF",
        "primary-white": "#FBFAFF",
      },
      backgroundColor: ["active"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
