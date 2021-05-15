const { writeFileSync } = require('fs')

for (let i = 0; i < 10000; i++) {
    writeFileSync('./T-demo-folder/bigfile.txt', `hello world ${i}\n`, { flag: 'a' })
}