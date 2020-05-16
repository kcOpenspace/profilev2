// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAswe9ncOt5bSTow6MxjfP0QooKyb1soUM",
    authDomain: "projectv2-f67d3.firebaseapp.com",
    databaseURL: "https://projectv2-f67d3.firebaseio.com",
    projectId: "projectv2-f67d3",
    storageBucket: "projectv2-f67d3.appspot.com",
    messagingSenderId: "636921614825",
    appId: "1:636921614825:web:df6e7abd9a920b3cb1bb78"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //reference message collection Database
  var db = firebase.database();
  var messageRef = db.ref("message");
//   var messageRef = firebase.database().ref("messages");


//listen for submit
document.getElementById('contactform').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    //Get Values From Form
    var name = getInputVal('name');
    var company = getInputVal('company');
    var contact = getInputVal('contact');
    var email = getInputVal('email');
    var message = getInputVal('message');
    
    //save message
    saveMessage(name,company,contact,email,message);

    //Show Alert
    document.querySelector('.alert').style.display ='block';

    //hide alert after 3sec
    setTimeout(function(){
        document.querySelector('.alert').style.display ='none';     
    },3000);

    //clear form
    document.getElementById('contactform').reset();

}

//getForm Values from each form id
function getInputVal(id) {
    var textVal = document.getElementById(id);
    textVal.value;
    return textVal.value
}

//save to firebase message
function saveMessage(name,company,contact,email,message){
    var newMessageRef = messageRef.push();

    var json = JSON.parse(JSON.stringify({
        name:name,
        company:company,
        contact:contact,
        email:email,
        message:message
    }));

    newMessageRef.set(json);
        
    // newMessageRef.set({
    //     name:name,
    //     company:company,
    //     contact:contact,
    //     email:email,
    //     message:message
    // });
}