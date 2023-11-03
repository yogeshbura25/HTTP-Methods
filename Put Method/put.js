let userInputE1 = document.getElementById("userInput");
let requestBodyE1 = document.getElementById("requestBody")
let sendPostRequestBtnE1 = document.getElementById("sendPutRequestBtn");
let loadingE1 = document.getElementById("loading");
let requestStatusE1 = document.getElementById("requestStatus");
let httpResponseE1 = document.getElementById("httpResponse");

function sendPutHTTPRequest() {
    let userId = userInputE1.value;
    let requesturl = "https://gorest.co.in/public-api/users" + userId;
    let requestBody = requestStatusE1.value;
    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0",
        },
        body: requestBody
    };
    loadingE1.classList.remove("d-none");
    requestStatusE1.classList.add("d-none");
    fetch(requesturl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            requestStatusE1.classList.remove("d-none");
            loadingE1.classList.add("d-none");
            let requestStatus = jsonData.code;
            let httpResponse = JSON.stringify(jsonData);
            requestStatusE1.textContent = requestStatus;
            httpResponseE1.textContent = httpResponse;
        })
}

sendPostRequestBtnE1.addEventListener("click", sendPutHTTPRequest);