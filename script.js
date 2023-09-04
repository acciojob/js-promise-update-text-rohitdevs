//your JS code here. If required.
 function delay(ms) {
            return new Promise(resolve => setTimeout(resolve("Hello, world!"), ms));
        }
delay(1000).then(result => {
                const resultDiv = document.getElementById('output');
                resultDiv.innerText = result;
            })
