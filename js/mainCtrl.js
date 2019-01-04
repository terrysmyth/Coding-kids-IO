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


        
        



     })