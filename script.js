document.getElementById("scanBtn").addEventListener("click", function () {
    if (window.SeaTalk) {
        SeaTalk.scanCode()
            .then(result => {
                document.getElementById("result").innerText = "Scanned Code: " + result;
            })
            .catch(error => {
                document.getElementById("result").innerText = "Error: " + error.message;
            });
    } else {
        alert("SeaTalk Web SDK is not available. Please open this page in the SeaTalk app.");
    }
});
