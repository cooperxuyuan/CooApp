import { scanCode } from '@seatalk/web-app-sdk';

function openScanner() {
    scanCode({ codeType: ['qrCode'] })
        .then((res) => {
            console.log('Scan result:', res);
        })
        .catch((err) => {
            console.error('Scan error:', err);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('scanButton').addEventListener('click', openScanner);
});
