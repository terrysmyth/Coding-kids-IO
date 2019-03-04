 "use strict";

 angular.module("myApp")
     .controller('mainCtrl', function($rootScope, $scope, $location, $firebaseObject, $firebaseArray, $window) {
         // Get a reference to the database server
         var database = firebase.database();
         var provider = new firebase.auth.GoogleAuthProvider();
         // CHECK USER
         var user = firebase.auth().currentUser;
         const loading = document.getElementById("loading");

         firebase.auth().onAuthStateChanged(function(user) {
         loading.style.display = "block";

             if (user) {
                 console.log("I'm logged in!");
                 $rootScope.user = user;

                 let ref = database.ref("users/" + user.uid);
                 let profile = $firebaseObject(ref);
                 $scope.profile = profile;
                 loading.style.display = "none";


             } else {
                 console.log("No user");
                 loading.style.display = "none";

             }
         });

         $scope.login = function() {
             loading.style.display = "block";


             firebase.auth().signInWithRedirect(provider);
             firebase.auth().getRedirectResult().then(function(result) {
                 if (result.credential) {
                     // This gives you a Google Access Token. You can use it to access the Google API.
                     var token = result.credential.accessToken;
                     // ...
                 }
                 // The signed-in user info.
                 var user = result.user;
                 $rootScope.user = result.user;
             }).catch(function(error) {

                 console.log(error)
                 // Handle Errors here.
                 var errorCode = error.code;
                 var errorMessage = error.message;
                 // The email of the user's account used.
                 var email = error.email;
                 // The firebase.auth.AuthCredential type that was used.
                 var credential = error.credential;
                 // ...
             });

         }

         // LOGOUT
         $scope.logout = function() {
             alertify.confirm('Log Out?', function() {
                 firebase.auth().signOut().then(function() {
                     console.log("Logged Out!");
                     $rootScope.user = null;
                     $state.go("home");
                 }).catch(function(error) {
                     console.log("Not Logged Out!");
                 });
                 alertify.success('Ok');
             }, function() {
                 alertify.error('Cancel');
             });

         }

         // SELECT GAME
         $scope.selectedGame = null;
         $scope.selectGame = function(game) {
             $scope.selectedGame = game;

         }

         // Test get from Firebase
         var ref = database.ref("siteInfo"); // GET OBJECT
         ref = $firebaseObject(ref); //turn in to JS OBJECT
         ref.$bindTo($scope, "siteInfo"); //Tie object to SCOPE


         // GAMES
         $scope.games = [{
                 title: "Something",
                 author: "Jackie Chan",
                 description: "This is a game",
                 img: "https://tokegameart.net/wp-content/uploads/2018/02/corona-Ninja-Shadow-2-Game-2D-Character-Sprite.png",
                 leaderboard: [
                     ["Terry", 5000],
                     ["Jack", 4990],
                     ["bob", 3800],
                     ["Luke", 2400]
                 ]
             },
             {
                 title: "Kung Fu",
                 author: "Bruce Lee",
                 description: "Kung Fu everyone to death",
                 img: "http://i1.wp.com/shoryuken.com/wp-content/uploads/2018/04/jacklol.png?fit=750%2C400&resize=750%2C400",
                 leaderboard: [
                     ["Jeffy", 5990],
                     ["Jack", 4990],
                     ["Ale", 3990],
                     ["Luke", 2990]
                 ]
             },
             {
                 title: "Ninja",
                 author: "Shadow Warrior",
                 description: "This is a game, and you are a Ninja",
                 img: "https://tokegameart.net/wp-content/uploads/2016/06/Zombie-04-01.jpg",
                 leaderboard: [
                     ["Terry", 5000],
                     ["Jack", 4090],
                     ["Ale", 3060],
                     ["Luke", 2356]
                 ]
             },
             {
                 title: "Monster",
                 author: "Luke",
                 description: "This is a game, and you eat monsters, in the game! However there are super monsters to try eat and kill before they eat and kill you!",
                 img: "https://www.gamedevmarket.net/file/e82a7459a48204d51c9a7c95059a54a7-700x400.png",
                 leaderboard: [
                     ["Terry", 5000],
                     ["Jack", 4990],
                     ["Ale", 3300],
                     ["Streamer[123]", 2000]
                 ]
             },
             {
                 title: "Jumpy",
                 author: "Ale",
                 description: "This is a game were you bounce a ball and damage others by throwing  the ball at them",
                 img: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX9003172.jpg",
                 leaderboard: [
                     ["Terry", 5111],
                     ["Jack", 4990],
                     ["Ale", 3000],
                     ["Luke", 2000]
                 ]
             },
             {
                 title: "Blah blah blah",
                 author: "Jack",
                 description: "bore your teacher to death by yaking on and on and on before she bores you",
                 img: "https://d38c5dutwb1t0j.cloudfront.net/Pictures/480xany/9/5/0/129950_shutterstock_509416948_435334.jpg",
                 leaderboard: [
                     ["Terry", 5000],
                     ["luke", 3090],
                     ["Ale", 3020],
                     ["Jack", 2100]
                 ]
             }
         ];

         // upload game function
         $scope.uploadGame = function(name, description, instructions, genre, file, profile) {
            var newPostKey = firebase.database().ref().child('games/').push().key;
            firebase.database().ref('games/' + newPostKey).set({
                 gameName: name,
                 gameDesc: description,
                 gameInstruct: instructions,
                 gameAuthor: profile.nickname,
                 gameUid: profile.uid,
                 gameGenre: genre,
                 gameFile: file,
                 key: newPostKey
             });
         }


         // CREATE ACCOUNT
         $scope.createAccount = function(newAccount, user) {

             firebase.database().ref('users/' + user.uid).set({
                 username: user.displayName,
                 nickname: newAccount.nickname,
                 email: user.email,
                 description: newAccount.description,
                 theme: newAccount.theme,
                 photoURL: user.photoURL,
                 uid: user.uid,
                 role: "guest",
                 level: 1
             });

         }




     }) // END