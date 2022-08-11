const messages = [
  "Jesus",
  "Ana",
  "Carolina",
  "Paulina",
  "Nicolas",
  "Jesica",
  "Duvan",
  "Laura"
];

const randomMsg = () => {
  const messages = messages[Math.floor(Math.random() * messages.length)];
  console.log(messages);
}

module.exports = { randomMsg };