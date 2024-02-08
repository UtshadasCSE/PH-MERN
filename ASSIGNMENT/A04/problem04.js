/*function signature/sample */
function password({ name, birthYear, siteName }) {
  //write your code here
  if (!name || !birthYear || !siteName) {
    return "invalid";
  }
  if (isNaN(birthYear) || birthYear.toString().length !== 4) {
    return "invalid";
  }
  const password = `${siteName}#${name}@${birthYear}`;
  return password;
}

// console.log(password({ name: "maisha", birthYear: 2002 }));
