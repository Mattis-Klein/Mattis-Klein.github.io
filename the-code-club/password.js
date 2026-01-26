            function checkPassword() {
               var passwordBoxObject = document.getElementById("passwordBox");
               var enteredPassword = passwordBoxObject.value;
               console.log("user entered password:",enteredPassword);
               
               var sitePassword = "letmein";
               if (enteredPassword == sitePassword) {
               window.location.assign("members.html");
            } else {
                // wrong password text is red, prompt to try again
                console.log("wrong password"); 
                document.getElementById("wrongPass").style.color = "red";
                document.getElementById("wrongPass").innerHTML = "Wrong password, try again...";

            }
        }