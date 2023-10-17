// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("promise learning");
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log('promise resolve');
// })

// const promisethree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({name: 'sarvender', age: 24})
//     },1000)
// })
// promisethree.then(function(user){
//     console.log(user);
// })

// const promisefour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username: 'satyam', password: '123'});
//         }else{
//             reject('Error: something went wrrong')
//         }
//     }, 1000)
// })

// promisefour.then((user)=>{
//     return user.username
// }).then((username) =>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(() => console.log('the promise is resolve or rejected'))


// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: 'satyam', password: '123'});
//         }else{
//             reject('Error: something went wrrong')
//         }
//     }, 1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//     console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()


// async function getAllUser(){
//    try {
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log('error : ', error);
//    }
// }
// getAllUser();

fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
    return response.json()
}).then(function(data){
    console.log(data);
})
.catch(function(error){
     console.log(error);
})