const EventEmitter = require("events");

const verificationEmail = require("./verificationemail");
const welcomeEmail = require("./welcomeemail");
const adminEmail = require("./adminemail");

const eventEmitter = new EventEmitter();

module.exports = function () {
  // Some code that registers the user
  const user = { firstName: "Dhaval" };

  eventEmitter.on("reg", verificationEmail);
  eventEmitter.on("reg", welcomeEmail);
  eventEmitter.on("reg", adminEmail);

  eventEmitter.emit("reg", user); // events.user registered.map(func => func())
};
