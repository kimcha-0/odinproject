new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 3000);
})
.then((result) => console.log(result));
