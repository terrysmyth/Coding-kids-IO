
 "use strict";

 angular.module("myApp")
     .controller('mainCtrl', function($rootScope, $scope, $location, $firebaseObject, $firebaseArray, $window) {
         // Get a reference to the database server
         const database = firebase.database();
         var provider = new firebase.auth.GoogleAuthProvider();
         // CHECK USER
         var user = firebase.auth().currentUser;

         firebase.auth().onAuthStateChanged(function(user) {
             if (user) {
                 console.log("I'm logged in!");
                 $rootScope.user = user;

                 let ref = database.ref("users/" + user.uid);
                 let profile = $firebaseObject(ref);
                 $scope.profile = profile;

             } else {
                 console.log("No user");
             }
         });

         $scope.login = function() {

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
         var ref = database.ref("siteInfo");
         ref = $firebaseObject(ref);
         ref.$bindTo($scope, "siteInfo");

          // Test get from Firebase
         var refG = database.ref("games");
         refG = $firebaseArray(refG);
         $scope.games = refG;

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

         $scope.fullScreen = function(selectedGame) {
            let screen = document.getElementById("iframeGame");
            let screenBody = $('#iframeGame').contents().find('html');
            screenBody.html(selectedGame.code);
            screen.style.height = "650px";
            screen.style.width = "1100px";
         }

         $scope.minScreen = function() {
            let screen = document.getElementById("iframeGame");
            screen.style.height = "200px";
            screen.style.width = "300px";
         }




     }) // END