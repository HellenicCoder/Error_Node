const path = require('path')

const filePath = `C:\Users\OneDrive\Desktop\Node_Error\files`

console.log(path.dirname(filePath))
console.log(__dirname)

console.log(path.basename(filePath))
console.log(__filename)

console.log(path.extname(filePath))

const sampleFile = "sample.txt"
console.log(path.join(path.join(sampleFile)))