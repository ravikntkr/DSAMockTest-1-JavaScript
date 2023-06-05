const FirstUniqueChar = function (str) {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    count[char] = (count[char] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (count[char] === 1) {
      return i;
    }
  }
  return -1;
};

console.log(FirstUniqueChar("rrammanna"));
// OUTPUT : -1
