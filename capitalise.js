function capitalise(inputString) {
    const capitalizedString = inputString.charAt(0).toUpperCase() + inputString.slice(1);

  return capitalizedString;
}

module.exports = capitalise;