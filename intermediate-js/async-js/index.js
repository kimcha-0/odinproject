const tick = Date.now();
const log = (v) => console.log("".concat(v, " \n Elapsed: ").concat(Date.now() - tick))


 const codeBlocker = () =>  {
    // let i = 0;
    // while (i < 1000000000) { i++; }
    // return 'billion loops done';
    return new Promise((resolve, reject) => {
        let i = 0;
        while (i < 1000000000) {
            i++;
        }
        resolve('billion loops done with a Promise');
    });
};
log('Synchronous 1');
log(codeBlocker());
log('Synchronous 2');
