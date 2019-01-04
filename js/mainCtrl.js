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


         // Creator DB

         $scope.creator = {
             title: "About the creators",
             subtitle: "The Coding Kids Coalition",
             description: "Morbi eget diam purus. Etiam at sem et dui ultricies ullamcorper non at ipsum. Sed convallis vitae massa et finibus. Nullam sit amet volutpat purus, finibus cursus leo. In interdum tincidunt quam, non sodales lorem viverra ut. Nulla eget tortor eu enim dictum ornare. Nunc mattis, mauris consequat vehicula bibendum, urna augue vehicula est, at mollis ante lorem non augue. Phasellus ullamcorper quam sed eleifend facilisis. Morbi eget nunc sed odio faucibus efficitur eget in sem. Suspendisse interdum quam sit amet ipsum imperdiet, ut feugiat mi rutrum. Sed ut laoreet odio. Donec vel sapien nibh. Aenean in posuere dolor, nec vehicula mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ut sollicitudin leo. Maecenas tempor velit eu odio sodales, a imperdiet lacus consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non est accumsan tortor dapibus egestas. Donec dignissim nulla vitae tempor efficitur. Vivamus non leo id lacus faucibus laoreet. Etiam malesuada nunc neque, vitae lobortis libero pharetra faucibus. Proin erat ex, posuere a nibh ac, pharetra lobortis enim. Cras porta lectus eu nisi ultrices, at luctus sem faucibus. Aenean ut tincidunt diam, vitae pretium felis. Donec vitae eleifend eros, eget condimentum massa. Quisque magna lectus, condimentum a dui tristique, hendrerit facilisis quam. Sed accumsan massa leo, ac posuere dolor interdum quis. Nam ultricies nulla ut diam suscipit dictum. Donec in ex vitae mi varius euismod. Maecenas in turpis vitae lectus finibus finibus pharetra id leo. Mauris mollis velit at fermentum scelerisque. Proin pulvinar purus lorem, eget tempor.",
             button: "Play some games!"
         }




     })