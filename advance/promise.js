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

const promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: 'satyam', password: '123'});
        }else{
            reject('Error: something went wrrong')
        }
    }, 1000)
})

promisefour.then((user)=>{
    return user.username
}).then((username) =>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(() => console.log('the promise is resolve or rejected'))