
"use strict";

angular.module("myApp")

    .controller('uploadCtrl', function($rootScope, $scope, $location, $firebaseObject) {

        // Input of image
        const imageHolder = document.getElementById("fileUpload");
        const chooseFile = document.getElementById("chooseFile");
        const theFileName = document.getElementById("fileName");

        imageHolder.addEventListener("change", function(e) {
            chooseFile.style.display = "none";
            theFileName.innerHTML = imageHolder.files[0].name;
        })

        // Upload Game
        let ref = database.ref("games");
        let games = $firebaseObject(ref);
        games.$bindTo($scope, 'games');

        let newGame;

        //RESIZING
        var file;
        var fileName = null;
        var fileButton;

        var fileButton;

        setTimeout(function() {
            fileButton = document.getElementById('fileUpload');
            console.log(fileButton)


            fileButton.addEventListener("change", function(e) {

                file = fileButton.files[0];
                // RESIZING!
                ImageTools.resize(this.files[0], {
                    width: 700, // maximum width
                    height: 700 // maximum height

                }, function(blob, didItResize) {
                    // didItResize will be true if it managed to resize it, otherwise false (and will return the original file as 'blob')
                    var url = window.URL.createObjectURL(blob);
                    console.log(url)
                    document.getElementById('preview').style.backgroundImage = "url(" + url + ")";
                    // you can also now upload this blob using an XHR.
                    file = blob;

                });

            })
        }, 2000)

        $scope.createGame = function(game) {
            $scope.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var newKey = firebase.database().ref().child('games').push().key;
            var storageRef = firebase.storage().ref();
            console.log("I work!");
            alertify.confirm('Create Game?', 'Are you sure you want to create this game?', function() {
                try {
                    var uploadTask = storageRef.child('gallery/' + newKey + "/" + fileName).put(file);
                    // Register three observers:
                    // 1. 'state_changed' observer, called any time the state changes
                    // 2. Error observer, called on failure
                    // 3. Completion observer, called on successful completion
                    uploadTask.on('state_changed', function(snapshot) {
                        // Observe state change events such as progress, pause, and resume
                        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                        switch (snapshot.state) {
                            case firebase.storage.TaskState.PAUSED: // or 'paused'
                                console.log('Upload is paused');
                                break;
                            case firebase.storage.TaskState.RUNNING: // or 'running'
                                console.log('Upload is running');
                                break;
                        }
                        console.log("Image Upload completed");
                    }, function(error) {
                        // Handle unsuccessful uploads
                        alertify.alert('Alert Message!: ' + error);
                    }, function() {
                        // Handle successful uploads on complete
                        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                            console.log('File available at', downloadURL);
                            var date = new Date();
                            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                            var year = date.getFullYear();
                            var month = months[date.getMonth()];
                            var day = date.getDate();
                            game.code = `<iframe>${game.code}</iframe>`;
                            newGame = {
                                name: game.name,
                                author: $rootScope.user.displayName,
                                description: game.description,
                                code: game.code,
                                url: downloadURL,
                                key: newKey,
                                date: `${day} ${month} ${year}`
                            }
                            database.ref("games/" + newKey).set(newGame);
                        });

                    });
                    alertify.alert("Game upload complete!");
                    console.log("Game Upload Complete");
                    window.location.replace("/#/home");
                } catch (error) {
                    alertify.alert('Alert Message: ' + error);
                }


            }, function() {
                alertify.error('Game not created');
            });




        }


    })