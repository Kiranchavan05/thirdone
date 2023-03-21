
const posts=[
    {title:'post 1', body:'this is the post 1',createdAt: new Date().getTime()},
    {title:'post 2', body:'this is the post 2',createdAt: new Date().getTime()}
];

function getPost(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output=output+`<li>${post.title}</li>`
        })
        document.body.innerHTML=output
    },2000)
}



function createPost(post){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            posts.push(post)
            const error=false

            if(!error){
                reslove(posts)
            }else{
                reject('error: something went wrong')
            }
        },1000)
    })
}


// createPost({title:'post 3',body:'this is post 3',createdAt: new Date().getTime()})
// .then(getPost);

const user={
    username:'ganesh',
    lastActivityTime : '4th of january'
}


function updateLatestActivityTime(){
    return new promise((reslove,reject)=>{
        setTimeout(()=>{
            user.lastActivityTime=new Date().getTime()/1000
            reslove(user.lastActivityTime)
        },1000)
    }) 
}

function deletePost(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (posts.length > 0){
                const lastelement = posts.pop()
                resolve(lastelement)
            } else {
                reject('Array is empty now')
            }
        },1000)
    })
 }
// function userUpdatesPost(){
//     Promise.all([createPost({title : 'Post four', body : "This is post three", createdAt : new Date().getTime() }),updateLastActivityTime()])
//    .then(([createPostresolves,updateLastActivityTimeresolves]) => {
//        getPosts()
//        deletePost()
//        console.log(createPostresolves,' last activity on ',updateLastActivityTimeresolves)
//    }).catch(error => console.log(error))
// }


// I want you to create one function called updateLastUserActivityTime which returns a promise.
// Every time the user creates a post, the user's lastActivity time should get called (should execute in 1 second)
// .When both the promises resolve (createPost and updateLastUserActivityTime ),
// I want you to console log all the posts created and lastActivityTime of the user. [If stuck for long watch the hint 2]
// Once both the above promises are resolved , I want you to delete the last post by calling the deletion promise.
// Once successfully deleted, I want you to log the new set of Posts of the user.


function userUpdatePost(){
    promise.all([createPost({title:'post 4', body:'this is post 4',createdAt:new Date().getTime()}),updateLatestActivityTime])
    .then(([createPostresolves,updateLatestActivityTimerersolve])=>{
        getPost();
     deletePost();   
     console.log(createPostresolves,' last activity on ',updateLastActivityTimeresolves)
    }).catch(error => console.log(error))
}
Promise.all([updatelastuseractivity,createPost]).then(([createpostresolves,lastactivitytimeresolves])=>{
    console.log(lastactivitytimeresolves)
}).catch(err=>console.log(err));