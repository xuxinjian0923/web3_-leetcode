/*
// 第一种
setTimeout(()=>{
    console.log('test timeout');
})
setImmediate(()=>{
    console.log('test immediate');
})*/

// 第二种
const fs = require('fs')
fs.readFile('./test5fsRead.txt', 'utf8', (err, data) => {
    /*
    * IO读取完文件,poll队列为空,所以立即执行immediate
    * */
    setTimeout(()=>{
        console.log('timeout')
    })
    setImmediate(() => {
        console.log('immediate')
    })
    console.log(1)
})
