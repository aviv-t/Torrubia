/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
<script>
        function solveUsingSelectedLoop() {
            const target = document.getElementById("target").value * 1; 
            const method = document.getElementById("method").value; 
            let sum = 0;
            let n = 0;

            if (method === "while") {

                while (sum < target) {
                    n++;
                    sum += n;
                }
            } else if (method === "for") {
  
                for (let i = 1; sum < target; i++) {
                    n = i;
                    sum += i;
                }
            } else if (method === "do-while") {
          
                do {
                    n++;
                    sum += n;
                } while (sum < target);
            }

       
            document.getElementById("result").innerText = n;
        }
    </script>