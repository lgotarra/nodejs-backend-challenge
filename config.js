const getVar = (name) => {
  const variable = process.env[name];
  if (!variable) {
    console.error(`${name} variable not set!`);
    process.exit(1);
  }
  return variable;
};

const SERVER_PORT = getVar("SERVER_PORT");

module.exports = {
  SERVER_PORT,
};
