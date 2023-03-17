console.log('Person1: shows ticket')
console.log('Person2: shows ticket')

const preMovie=async()=>{
    const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000);
    });

    const getPopcorn=new Promise((resolve,reject)=>resolve('Popcorn'));

    const getcandy=new Promise((resolve,reject)=>resolve('candy'))

    const getColdDrinks=new Promise((resolve,reject)=>resolve('ColdDrinks'));


    let ticket=await promiseWifeBringingTicks;

    let [Popcorn,candy,ColdDrinks]=await Promise.all([getPopcorn, getcandy,getColdDrinks])

        console.log(`${Popcorn},${candy},${ColdDrinks}`);

        return ticket;

}

preMovie().then((m)=>console.log(`person3: show ${m}`));


console.log('Person4: shows ticket')
console.log('Person5: shows ticket')

