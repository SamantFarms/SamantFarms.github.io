let arr = ["Hacking Makarand's username..." , "username found as : makasama..." , "connecting to facebook..." ,"connecting to instagram... " , " connecting to user's phone...", "Accessing local storage....", "advance searching...", "hacking into local device data....", "Hacking photos....", "Uploading data to server...", "Device crashed...."]

// let hackerman1 = async ()=>{
//   return new Promise ((resolve,reject)=>{
//   setTimeout(()=>{
//     hack.innerHTML = arr[0];
//     resolve(1)
//   },3000)
// })}  
  
  

// let hackerman2 = async ()=>{
//   return new Promise ((resolve,reject)=>{
//   setTimeout(()=>{
//     hack.innerHTML = hack.innerHTML  + "<br>"+"<br>"+"<br>" +  arr[1];
//     resolve(2)
//   },3000)
// })}


// let hackerman3 = async ()=>{
//   return new Promise ((resolve,reject)=>{
//   setTimeout(()=>{
//     hack.innerHTML = hack.innerHTML  + "<br>"+"<br>"+"<br>" +  arr[2];
//   resolve(3)
//   },3000)
// })}


// let hackerman4 = async ()=>{
//   return new Promise ((resolve,reject)=>{
//   setTimeout(()=>{
//     hack.innerHTML = hack.innerHTML  + "<br>"+"<br>"+"<br>" +  arr[3];
//     resolve(4)
//   },3000)
// })}


// let hackerman5 = async ()=>{
//   return new Promise ((resolve,reject)=>{
//   setTimeout(()=>{
//     hack.innerHTML = hack.innerHTML  + "<br>"+"<br>"+"<br>" +  arr[4];
//   resolve(5)
//   },3000)
// })}

// let hackerman = async ()=>{
//   let p1 = await hackerman1();
//   let p2 = await hackerman2();
//   let p3 = await hackerman3();
//   let p4 = await hackerman4();
//   let p5 = await hackerman5();
// }

// hackerman () ;


const start = async(seconds)=>{
  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
    resolve(true);  
    },seconds*1000)
    
  })
}



const hackerman = async (a)=>{
  await start(3);
  hack.innerHTML = hack.innerHTML + a + "<br>" + "<br>" ;
}

(async()=>{
  for (let i = 0; i < arr.length ; i++ ){
    await hackerman(arr[i]);
  }
})()

hackerman()