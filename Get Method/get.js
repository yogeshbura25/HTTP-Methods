let sendGetRequestBtnE1 = document.getElementById("sendGetRequestBtn");
let loadingE1 = document.getElementById("loading");
let requestSatusE1 = document.getElementById("requestStatus");
let httpResponseE1 = document.getElementById("httpResponse");

function sendGetHTTPRequest() {
    let requesturl = "https://gorest.co.in/public-api/users";
    let options = {
        method: "GET",
    };
    loadingE1.classList.remove("d-none");
    requestSatusE1.classList.add("d-none");
    fetch(requesturl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            requestSatusE1.classList.remove("d-none");
            loadingE1.classList.add("d-none");
            let requestSatus = jsonData.code;
            let httpResponse = JSON.stringify(jsonData);
            requestSatusE1.textContent = requestSatus;
            httpResponseE1.textContent = httpResponse;
        })
}

sendGetRequestBtnE1.addEventListener("click", sendGetHTTPRequest);