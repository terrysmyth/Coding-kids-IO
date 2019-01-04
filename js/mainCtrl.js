 "use strict";

 angular.module("myApp")
     .controller('mainCtrl', function($rootScope, $scope, $location, $firebaseObject, $window, $firebaseArray) {

         // SELECT GAME
         $scope.selectedGame = null;
         $scope.selectGame = function(game) {

             console.log(game);
             $scope.selectedGame = game;

         }

         // GAMES
         $scope.games = [

             {
                 title: "Something",
                 author: "Jakcie Chan",
                 description: "This is a game, and you eat monsters, in the game! However there are super monsters to try eat and kill before they eat and kill you!",
                 img: "https://i.imgur.com/ewiAJWS.png",
                 leaderboard: [
                     ["Terry", 5000],
                     ["Jack", 4990],
                     ["Jeff", 3000],
                     ["Jude", 2000]
                 ]
             },
             {
                 title: "Kung Fu",
                 author: "Bruce Lee",
                 description: "This is a game, and you eat monsters, in the game! However there are super monsters to try eat and kill before they eat and kill you!",
                 img: "https://i.imgur.com/ewiAJWS.png",
                 leaderboard: [
                     ["Terry", 5000],
                     ["Jack", 4990],
                     ["Jeff", 3000],
                     ["Jude", 2000]
                 ]
             },
             {
                 title: "Ninja",
                 author: "Shadow Warrior",
                 description: "This is a game, and you eat monsters, in the game! However there are super monsters to try eat and kill before they eat and kill you!",
                 img: "https://i.imgur.com/ewiAJWS.png",
                 leaderboard: [
                     ["Terry", 5000],
                     ["Jack", 4990],
                     ["Jeff", 3000],
                     ["Jude", 2000]
                 ]
             }


         ]



         $scope.about = {
             title: "About us!",
             subtittle: "Coding Kids IO",
             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
             button: "Play Some Games",
             link:"/#!/home"
         }








     }) // END