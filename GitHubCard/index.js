/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>\
          */
const cards = document.querySelector('.cards')


const followersArray = ['raudelf','tauanlongaretti','emster7013','VitaliyM3','Bobj2018','gustavo-yepez','wktg623','alesslongaretti']
console.log(followersArray);

const axiosData = axios.get("https://api.github.com/users/Afrodo1")
 .then(user => {
    cards.appendChild(userCards(user));
})
.then(
  followersArray.map(elem => {
    axios.get(`https://api.github.com/users/${elem}`)
    .then(response => { cards.appendChild(userCards(response));

    })
  })
)

const Data = axios.get("https://api.github.com/users/Afrodo1")
 .then(user => {
    return(user);
})

console.log(Data);
         


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/




/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/



userCards = (UserInfo) =>{

  //Elements

  const card = document.createElement('div');
  
  const photo = document.createElement('img');
  
  const cardInfo = document.createElement('div');
  
  const name = document.createElement('h3');

  const username = document.createElement('p');
  
  const location = document.createElement('p');

  const profile = document.createElement('p');

  const anchor = document.createElement('a');

  const followers = document.createElement('p');

  const following = document.createElement('p');

  const bio = document.createElement('p');

  // set classes

  card.classList.add("card");

  photo.classList.add('photo');

  cardInfo.classList.add('card-info');

  username.classList.add('username');

  name.classList.add('name');


  //adding content

  photo.setAttribute("src", UserInfo.data.avatar_url);

  name.textContent = null ? "name not provided" : UserInfo.data.name;

  username.textContent = `Username: ${UserInfo.data.login}`;

  location.textContent = UserInfo.data.location !== null
        ? `Location: ${UserInfo.data.location}`
        :"Location: Not Provided";

  anchor.textContent = UserInfo.data.url;

  anchor.setAttribute("href", UserInfo.data.html_url)

  profile.textContent = 'Profile: '
  
  profile.appendChild(anchor);

  followers.textContent= `Followers: ${UserInfo.data.followers}`;

  following.textContent = `Following: ${UserInfo.data.following}`;

  bio.textContent = `Bio: ${UserInfo.data.bio}`;

  //put them together

  card.appendChild(photo);
  
  card.appendChild(cardInfo);
  
  cardInfo.appendChild(name);
  
  cardInfo.appendChild(username);
  
  cardInfo.appendChild(location);
  
  cardInfo.appendChild(profile);
  
  cardInfo.appendChild(followers);
  
  cardInfo.appendChild(following);

  cardInfo.appendChild(bio);

  return card;


}

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/















/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <photo src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
