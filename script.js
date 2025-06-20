const input = document.getElementById('in')
const output = document.getElementById('ou')
const units = document.getElementById('unit')
const conBtn = document.getElementById('cBtn')

let lhs
conBtn.disabled = true
function kmtomile(lhs) {
    if (lhs === "") { output.value = "Enter KM" }
    else{
        lhs = parseInt(lhs)
        output.value = `${parseFloat((lhs * 0.6213712).toFixed(2))} Mile`
    }
}
function miletokm(lhs) {
    if (lhs === "") { output.value = "Enter Mile" }
    else{
        lhs = parseInt(lhs)
        output.value = `${parseFloat((lhs * 1.609344).toFixed(2))} KM`
    }
}




units.addEventListener("change", () => {
    if (units.value != "select") {
        conBtn.disabled = false
    } else {
        input.placeholder = "Input"
        output.placeholder = "Output"
        conBtn.disabled = true
    }
    input.value=""
    output.value=""
    if (units.value === "kmtomile") {
        input.placeholder = "KM"
        output.placeholder = "Mile"

    }
})


conBtn.addEventListener('click', () => {

    lhs = input.value
    if (isNaN(lhs)) output.value = "Numbers Only"

    else {
        if (units.value === "kmtomile") kmtomile(lhs)
        if (units.value === "miletokm") miletokm(lhs)
        
    }
})