 "use strict";

 angular.module("myApp")
     .controller('mainCtrl', function($rootScope, $scope, $location, $firebaseObject, $window, $firebaseArray) {

         // SELECT GAME
         $scope.selectedGame = null;
         $scope.selectGame = function(game) {
             $scope.selectedGame = game;

         }

         // GAMES
         $scope.games = [
        	{
        		title: "Something",
        		author: "Jakcie Chan",
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
                img:"https://tokegameart.net/wp-content/uploads/2016/06/Zombie-04-01.jpg",
                leaderboard:[
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
                img:"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX9003172.jpg",
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


         // Creator DB

         $scope.creator = {
             title: "About the creators",
             subtitle: "The Coding Kids Coalition",
             description: "Morbi eget diam purus. Etiam at sem et dui ultricies ullamcorper non at ipsum. Sed convallis vitae massa et finibus. Nullam sit amet volutpat purus, finibus cursus leo. In interdum tincidunt quam, non sodales lorem viverra ut. Nulla eget tortor eu enim dictum ornare. Nunc mattis, mauris consequat vehicula bibendum, urna augue vehicula est, at mollis ante lorem non augue. Phasellus ullamcorper quam sed eleifend facilisis. Morbi eget nunc sed odio faucibus efficitur eget in sem. Suspendisse interdum quam sit amet ipsum imperdiet, ut feugiat mi rutrum. Sed ut laoreet odio. Donec vel sapien nibh. Aenean in posuere dolor, nec vehicula mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ut sollicitudin leo. Maecenas tempor velit eu odio sodales, a imperdiet lacus consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non est accumsan tortor dapibus egestas. Donec dignissim nulla vitae tempor efficitur. Vivamus non leo id lacus faucibus laoreet. Etiam malesuada nunc neque, vitae lobortis libero pharetra faucibus. Proin erat ex, posuere a nibh ac, pharetra lobortis enim. Cras porta lectus eu nisi ultrices, at luctus sem faucibus. Aenean ut tincidunt diam, vitae pretium felis. Donec vitae eleifend eros, eget condimentum massa. Quisque magna lectus, condimentum a dui tristique, hendrerit facilisis quam. Sed accumsan massa leo, ac posuere dolor interdum quis. Nam ultricies nulla ut diam suscipit dictum. Donec in ex vitae mi varius euismod. Maecenas in turpis vitae lectus finibus finibus pharetra id leo. Mauris mollis velit at fermentum scelerisque. Proin pulvinar purus lorem, eget tempor.",
             button: "Play some games!",
             link: "/#!/home"
         }

        $scope.about = {
             title: "About us!",
             subtittle: "Coding Kids IO",
             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
             button: "Play Some Games",
             link:"/#!/home"
        }

     }) // END

