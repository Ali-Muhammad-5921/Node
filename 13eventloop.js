//started operating system process
console.log('first');
setTimeout(() => {  
    console.log('second');
}, 0);
console.log('third');
//completed and exited operating system process
// if we don't have any I/O operations then the callbacks of setTimeout() and setInterval() will be executed after the main code execution is completed.
// In this case, the main code execution consists of three console.log() statements. The first and third console.log() statements are executed immediately, while the second console.log() statement is scheduled to be executed after a delay of 0 milliseconds using setTimeout().
// Therefore, the output will be:
// first
// third
// second
// This demonstrates that even with a delay of 0 milliseconds, the callback function of setTimeout() is executed after the main code execution is completed.
