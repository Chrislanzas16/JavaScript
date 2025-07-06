

function register(
  username,
  email,
  password,
  subscriptionStatus,
  discordId,
  lessonsCompleted
) {
    let user = {
      username: username,  
      email: email ,
      password:password, 
      subscriptionStatus,
      discordId,
      lessonsCompleted,
      
    }
  console.log(user);
}

register(
  "chris",
  "chris@frontendsimplified.com",
  "test123",
  "VIP",
  "Chris#0001",
  [1, 2, 3]
);
