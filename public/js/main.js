/**
 * Created by cfhernandez on 3/3/17.
 */

var clicks = 0;

function getBridge() {
    try {
        return webkit.messageHandlers.native;
    } catch(err) {
        return null;
    }
}

function incrementCount(){
    var bridge = getBridge();

    if (bridge) {
        var message = {
            "cmd": "increment", "count": clicks, "callbackFunc": function (responseAsJSON) {
                var response = JSON.parse(responseAsJSON);
                clicks = response['count'];
                document.querySelector("#counter").innerText = "Count is " + clicks;
                return clicks;
            }.toString()
        };
        bridge.postMessage(message);
    }
    else {
        console.log('The native context does not exist');
    }
}

function customLogo() {
    document.querySelector('.lang-logo').style.background = 'none';
}

function init () {
    document.querySelector('#increment-btn').addEventListener('click', incrementCount);
};

document.addEventListener("DOMContentLoaded", init);

