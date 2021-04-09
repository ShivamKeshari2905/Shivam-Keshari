let arr = [1,2,3,5];
let [first, second, third, fourth] = arr;
console.log(third);

const organization = {companyName:"Microsoft", address:{city:"Poland", pincode:"115002"}};
let {companyName,address:{city,pincode}} = organization;
console.log(pincode);

