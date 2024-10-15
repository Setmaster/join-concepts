const joinList = function (array) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      result += array[i];
    } else {
      result += ", " + array[i];
    }
  }
  return result;
};
