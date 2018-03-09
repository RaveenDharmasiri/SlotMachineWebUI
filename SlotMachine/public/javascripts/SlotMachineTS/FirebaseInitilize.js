var database;

function setup(){
      var config = {
        apiKey: "AIzaSyB62C_FWKJBzdqZNCLGtv8TUz8KANSlHq0",
        authDomain: "my-slot-machine-project-82c07.firebaseapp.com",
        databaseURL: "https://my-slot-machine-project-82c07.firebaseio.com",
        projectId: "my-slot-machine-project-82c07",
        storageBucket: "",
        messagingSenderId: "892594359535"
      };
      firebase.initializeApp(config);
      console.log(firebase);
}

function addToFirebaseDatabase(){
    setup();
    var wins = localStorage.getItem("wins");
    var noOfSpins = localStorage.getItem("noOfSpins");
    var loses = localStorage.getItem("loses");
    var avgCredit = localStorage.getItem("Average");

    database  = firebase.database();

    var ref = database.ref('Stats');

    var data = {
        wins : wins,
        loses : loses,
        noOfSpins : noOfSpins,
        averageCredit : avgCredit

    }

    ref.push(data);
}


