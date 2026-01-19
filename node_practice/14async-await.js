// const {readFile} = require('fs');

// function getData(path) {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// }
// getData('./content/first.txt').then(data => {
//     console.log(data);
// }).catch(err => {
//     console.error(err);
// });

// const start = async () => {
//     try{
//     const first = await getText('./content/first.txt')
//     console.log(first);
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// start();

const {readFile, writeFile} = require('fs').promises;

const start = async () => {
    try{
        const first = await readFile('./content/first.txt','utf8');
        const second = await readFile('./content/second.txt','utf8');
        // console.log(first , second);
        await writeFile(
            './content/reult-mind-gernade.txt',
            `This is LEGANDARY : ${first} ${second}`,
            {flag : 'a'}
        )
    }
    catch(err){
        console.log(err);
    }
};
start();