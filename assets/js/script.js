let element = document.getElementById("element");
let code = document.getElementById("code");
let inputs = document.querySelectorAll(".sliders input");

inputs.forEach((inp) => inp.addEventListener("input", generateShadow));

function generateShadow() {
    let hShadow = document.getElementById("h-shadow").value;
    let vShadow = document.getElementById("v-shadow").value;
    let blurRadius = document.getElementById("blur-radius").value;
    let spreadRadius = document.getElementById("spread-radius").value;
    let shadowColor = document.getElementById("shadow-color").value;
    let ShadowColorOpacity = document.getElementById("shadow-opacity").value;
    let shadowInset = document.getElementById("shadow-inset").checked;

    let boxShadow = shadowInset ? `inset ${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor,ShadowColorOpacity)}` : `${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor,ShadowColorOpacity)}`
    element.style.boxShadow = boxShadow;
    code.textContent = `box-shadow: ${boxShadow}`
}

function hexToRgba(shadowColor, shadowColorOpacity) {
    let r = parseInt(shadowColor.substr(1, 2), 16);
    let g = parseInt(shadowColor.substr(3, 2), 16);
    let b = parseInt(shadowColor.substr(5, 2), 16);
    return `rgba(${r},${g},${b},${shadowColorOpacity})`;
}

window.onload = generateShadow();

function copyCode() {
    code.select();
    document.execCommand("copy");
}

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', function() {
        var toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
    })
}

