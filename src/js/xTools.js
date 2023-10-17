(function (window) {
    'use strict';
    var App = window.App || {};

    var elForm = document.getElementById('MGDAin');
    var elfcd = document.getElementById('fcd');
    var elfsyd = document.getElementById('fsyd');
    var elMsd = document.getElementById('msd');
    var elb = document.getElementById('b');
    var elh = document.getElementById('h');
    var elc = document.getElementById('c');
    var elInputHint = document.getElementById('inputHint');
    var elfcdRes = document.getElementById('fcd-res');
    var elfsydRes = document.getElementById('fsyd-res');
    var elmiuRes = document.getElementById('miu-res');
    var elniuRes = document.getElementById('niu-res');
    var elasRes = document.getElementById('as-res');
    var userVal;

    function testInputVal(userValue) {
        return /.[0-9]/.test(userValue);
    }

    function fcdHint() {
        userVal = elfcd.value;
        elfsyd.innerText = 'You input ' + userVal;
        if (testInputVal(userVal) === false) {
            elInputHint.innerHTML = 'fcd must be a numeric value!!!!!';
        } else {
            elInputHint.innerHTML = 'fcd input ok!';
        }
    }

    function fsydHint() {
        userVal = elfsyd.value;
        if (testInputVal(userVal) === false) {
            elInputHint.innerHTML = 'fsyd must be a numeric value!!!!!';
        } else {
            elInputHint.innerHTML = 'fsyd input ok!';
        }
    }

    function msdHint() {
        userVal = elMsd.value;
        if (testInputVal(userVal) === false) {
            elInputHint.innerHTML = 'Msd must be a numeric value!!!!!';
        } else {
            elInputHint.innerHTML = 'Msd input ok!';
        }
    }

    function bHint() {
        userVal = elb.value;
        if (testInputVal(userVal) === false) {
            elInputHint.innerHTML = 'b must be a numeric value!!!!!';
        } else {
            elInputHint.innerHTML = 'b input ok!';
        }
    }

    function hHint() {
        userVal = elh.value;
        if (testInputVal(userVal) === false) {
            elInputHint.innerHTML = 'h must be a numeric value!!!!!';
        } else {
            elInputHint.innerHTML = 'h input ok!';
        }
    }

    function cHint() {
        userVal = elc.value;
        if (testInputVal(userVal) === false) {
            elInputHint.innerHTML = 'c must be a numeric value!!!!!';
        } else {
            elInputHint.innerHTML = 'c input ok!';
        }
    }

    function doCalc(event) {
        var ifcd = elfcd.value;
        var ifsyd = elfsyd.value;
        var iMsd = elMsd.value;
        var ib = elb.value;
        var ih = elh.value;
        var ic = elc.value;
        var miu = iMsd/(ib*(ih-ic)**2*ifcd*1000);
        var niu = (1-Math.sqrt(1-2.42*miu))/1.21;
        var asc = niu*ib*(ih-ic)*ifcd*1000/(ifsyd*0.1);
        // miu = miu.round(miu,4);
        // niu = niu.round(niu,4);
        // asc = asc.round(asc,2);

        elfcdRes.innerHTML = ifcd + ' MPa';
        elfsydRes.innerHTML = ifsyd+ ' MPa';
        elmiuRes.innerHTML = miu.toFixed(4); //miu;
        elniuRes.innerHTML = niu.toFixed(4); //niu; //
        elasRes.innerHTML = asc.toFixed(2) + " cm<sup>2</sup>"; //asc; //
        event.preventDefault();
        // event.stopPropagation();
    }


// Create Event Listeners for validation of input fields
    elfcd.addEventListener('input', fcdHint, false);
    elfcdRes.value = elfcd.value + ' MPa';
    elfsyd.addEventListener('input', fsydHint, false);
    elfsydRes.value = elfsyd.value + ' MPa';
    elMsd.addEventListener('input', msdHint, false);
    elmiuRes.value = elMsd.value + ' kNm';
    elb.addEventListener('input', bHint, false);
    elniuRes.value = elb.value + ' m';
    elh.addEventListener('input', hHint, false);
    elasRes.value = elh.value + ' m';
    elc.addEventListener('input', cHint, false);

    elForm.addEventListener('submit', doCalc, false);

// write the values that were input!

    App.testInputVal = testInputVal;
    App.fcdHint = fcdHint;
    App.fsydHint = fsydHint;
    App.msdHint = msdHint;
    App.bHint = bHint;
    App.hHint = hHint;
    App.cHint = cHint;
//
    window.App = App;
})(window);
