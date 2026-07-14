//回调
const fs = require('fs');
// fs.readFile('./src/content.txt',(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString());
// }) 
//promise形式
let p = new Promise((resolve, reject) => {
    fs.readFile('./content.txt', (err, data) => {
        if (err) reject(err);
        resolve(data);
    })
})
p.then(value=>{
    console.log(value.toString());
},reason=>{
    console.log(reason);
})