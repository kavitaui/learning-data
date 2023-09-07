const add = (a,b)=>{
   return new Promise((resolve, reject)=>{
    const sum = a + b;
     resolve(sum);
   });
}


add().then((result)=>{
    console.log(result);
})

async function main(){
  const result = await add(1,2);
  console.log(result);
}

main()

async function main1(){
     await add(1,2).then((result)=>{
        console.log(result);
    })
    console.log("Hello")
  }

  main1();