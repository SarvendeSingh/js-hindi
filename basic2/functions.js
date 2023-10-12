function saymyname() {
    // console.log("sarvender");
    // console.log("singh");
}

saymyname(); //calling the function

//saymyname // referencing the function that mean telling the function that the function is present at that place and calling function

// function addTwoNumber (num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumber (num1, num2){
    return (num1 + num2);
}



const results = addTwoNumber(4,6);

//console.log(results);  // this result will become undefinied because function does not returning any thing.

function calculateCart (val1, val2, ...num1) { //rest operator
    return num1;
}

// console.log(calculateCart(100, 300, 400, 600));

const obj = {
    username: 'sarvender singh',
    age: 24
}

function handleObjects (anyobject) {
    console.log(`my name is ${anyobject.username} and my age is ${anyobject.age}`);
}

handleObjects(obj);