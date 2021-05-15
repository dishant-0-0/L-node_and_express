const { readFileSync, writeFileSync }=require('fs');

const first = readFileSync('./T-demo-folder/first.txt','utf-8')
const second = readFileSync('./T-demo-folder/second.txt','utf-8')

writeFileSync(
'./T-demo-folder/result-sync.txt',
`Here is the result : ${first}, ${second}`,
{flag: 'a'}
)