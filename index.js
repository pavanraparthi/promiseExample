// Thanks to the author of this video
//https://www.youtube.com/watch?v=s6SH72uAn3Q
// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Promise Example</h1><p>Thanks to the author of this <a href="https://www.youtube.com/watch?v=s6SH72uAn3Q">Video</a><br>
Please check console and play with true or false values in this example</p>`;

// Plan example for Promise
let promiseExample = new Promise((resolve, reject)=>{
  // lets do some thing here
  let isJobDone = false;// play with true/false
  if(isJobDone)
    resolve('your defined job done');
  else
    reject('Sorry i am not able to do');  
});

promiseExample
  .then((response)=>{
    console.log(response);
  }).catch((error)=>{
    console.log(error);
  })

// Dependency Promise
let fetchApipromise = function (){
  return new Promise((resolve,reject) => {
    // fetching api data
    let isDataCame = true;// play with true/false
    if(isDataCame)
      resolve('Data fetching done');
    else
      reject('createView will not perform');  
  })
}

let createView = function (data){
  return new Promise((resolve,reject) => {
    // this will execute once you got data from api
    let isViewCreated = true;// play with true/false
    if(isViewCreated)
      resolve('View created data done');
    else
      reject('Due to some reason view not created');  
  })
}

// Now use Dependency promises
fetchApipromise().then((response) => {
  return createView(response);
}).then((response) => {
  console.log(response);
}).catch((error) => {
  console.log(error);
})

// Executing all promises asyn and listening on callbacks
Promise.all([fetchApipromise(), createView()]).then((response) => {
  console.log('Async calling all promise response :: ' + response);
}).catch((error) => {
  console.log('Async calling all promise reject response :: ' + error);
})

//listening on any completion promiseExample
Promise.race([fetchApipromise(), createView()]).then((response) => {
  console.log('listening on any completion promiseExample :: '+response);
}).catch((error) => {
  console.log('listening on any completion promiseExample failure :: '+ error);
})