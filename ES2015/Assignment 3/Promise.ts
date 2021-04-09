let x = Promise.resolve(37);
let y = Promise.resolve(21)

Promise.all([x, y]).then(values => {
    const sum = values.reduce((a,b) => a+b);
    console.log(sum);
}); 
