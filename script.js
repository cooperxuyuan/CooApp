import { scanCode } from '@seatalk/web-app-sdk';

document.getElementById("scanBtn").addEventListener("click", async function () {
    try {
        const result = await scanCode({ codeType: ['qrCode'] });
        console.log("Scan successful:", result);
        document.getElementById("result").innerText = "Scanned Code: " + JSON.stringify(result);
    } catch (error) {
        console.error("Scan failed:", error);
        document.getElementById("result").innerText = "Error: " + error.message;
    }
});
