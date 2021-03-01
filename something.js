 var config = {
    apiKey: "AIzaSyCsBkaJRzWtmo0VVW2dZdQJzVxaCaTlQhg",
    authDomain: "kodecrypt-252da.firebaseapp.com",
    databaseURL: "https://kodecrypt-252da.firebaseio.com",
    projectId: "kodecrypt-252da",
    storageBucket: "kodecrypt-252da.appspot.com",
    messagingSenderId: "409389653612"
  };  console.log("Connected to fb");

  firebase.initializeApp(config);

 
function authenticate()
{
  var username = document.getElementById('email');
var userpass = document.getElementById('pass');
  alert("Logging in");  
  console.log("Event fired");
  const email = username.value;
  const pass = userpass.value;
  const auth= firebase.auth();

  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e=>alert("Incorrect credentials...try again"));
}
firebase.auth().onAuthStateChanged(firebaseUser=>{
  if(firebaseUser)
  {
    console.log(firebaseUser);
    window.open('./database.html', "_self");
  }
  else{
    alert("Login with the credentials.");
  }

})

// alert("Connected to fb");