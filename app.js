// fetch("https://jsonplaceholder.typicode.com/users/1")

// 1. Then
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// async function main() {
//  const response = await fetch ("https://jsonplaceholder.typicode.com/users/1")
//  const data = await response.json()
//  console.log(data)
//  emailRef.innerHTML = data.email
// }

const statusRef = document.querySelector ('.status')

function getSubscriptionStatus () {
    return new Promise ((resolve, reject) => {
      resolve ("VIP")
}) }

function getVideo (subscriptionStatus) {
    return new Promise ((resolve, reject) => {
        if (subscriptionStatus === "VIP")  {resolve ('show video')}
       else if (subscriptionStatus === "Free") {resolve ('show trailer')}
         else {reject ('no video')}
        
    } ) 
    
}

async function main() {
    const status = await getSubscriptionStatus();
   statusRef.innerHTML = status
   console.log( await getVideo(status));}


 main()