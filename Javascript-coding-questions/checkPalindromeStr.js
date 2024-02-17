const checkPolyndrome = (str) => {
  const reverse = str.split("").reverse().join("");

  if (str === reverse) {
    return true;
  } else {
    return false;
  }
};

console.log(checkPolyndrome("madam1"));
