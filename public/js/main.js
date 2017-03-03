/**
 * Created by cfhernandez on 3/3/17.
 */

function callNativeApp () {
    try {
        webkit.messageHandlers.callbackHandler.postMessage("Hello from JavaScript");
    } catch(err) {
        console.log('The native context does not exist yet');
    }
}

setTimeout(function () {
    callNativeApp();
}, 5000);

function customLogo() {
    document.querySelector('.lang-logo').style.background = "none";
}