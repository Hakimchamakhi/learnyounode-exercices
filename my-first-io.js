const fs = require('fs')

const str = fs.readFileSync(process.argv[2]).toString()
const arr = str.split('\n')
console.log(arr.length-1);