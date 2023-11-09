// const solution = (my_string) => [...my_string].map(str => str === "a" ? str.replaceAll(/a/g, "A") : str.toLowerCase()).join("")
const solution = (my_string) => [...my_string].map(str => str.toLowerCase().replace(/a/g, "A")).join("")
