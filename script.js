// const input = document.getElementById('in')
// const output = document.getElementById('ou')
// const units = document.getElementById('unit')
// const cat = document.getElementById('cat')
// const conBtn = document.getElementById('cBtn')
// let lhs
// conBtn.disabled = true
// function kmtomile(lhs) {
//     if (lhs === "") { output.value = "Enter KM" }
//     else {
//         lhs = Number(lhs)
//         output.value = `${parseFloat((lhs * 0.6213712).toFixed(2))} Mile`
//     }
// }
// function miletokm(lhs) {
//     if (lhs === "") { output.value = "Enter Mile" }
//     else {
//         lhs = Number(lhs)
//         output.value = `${parseFloat((lhs * 1.609344).toFixed(2))} KM`
//     }
// }
// function metertoft(lhs) {
//     if (lhs === "") { output.value = "Enter Meter" }
//     else {
//         lhs = Number(lhs)
//         output.value = `${parseFloat((lhs * 3.28039).toFixed(2))} Foot`
//     }
// }
// function fttometer(lhs) {
//     if (lhs === "") { output.value = "Enter Foot" }
//     else {
//         lhs = Number(lhs)
//         output.value = `${parseFloat((lhs * 0.3048).toFixed(2))} Meter`
//     }
// }
// function cmtoin(lhs) {
//     if (lhs === "") { output.value = "Enter CM" }
//     else {
//         lhs = Number(lhs)
//         output.value = `${parseFloat((lhs * 0.3937).toFixed(2))} Inch`
//     }
// }

// function intocm(lhs) {
//     if (lhs === "") { output.value = "Enter In" }
//     else {
//         lhs = Number(lhs)
//         output.value = `${parseFloat((lhs * 2.54).toFixed(2))} CM`
//     }
// }


// function mmtoin(lhs) {
//     if (lhs === "") { output.value = "Enter MM" }
//     else {
//         lhs = Number(lhs)
//         output.value = `${parseFloat((lhs * 0.0393700787).toFixed(2))} Inch`
//     }
// }

// function intomm(lhs) {
//     if (lhs === "") { output.value = "Enter CM" }
//     else {
//         lhs = Number(lhs)
//         output.value = `${parseFloat((lhs * 25.40).toFixed(2))} Inch`
//     }
// }



// units.disabled = true

// cat.addEventListener("change", () => {
//     if (cat.value != "select") {
//         units.disabled = false
//         if (cat.value == "length") {
//             units.innerHTML = ` 
//                 <option value="select">Select Units</option>
//                 <option value="kmtomile">KM to Mile</option>
//                 <option value="miletokm">Mile to KM</option>
//                 <option value="metertoft">Meter To Foot</option>
//                 <option value="fttometer">Foot to Meter</option>
//                 <option value="cmtoin">CM to Inch</option>
//                 <option value="intocm">Inch to CM</option>
//                 <option value="mmtoin">MM to Inch</option>
//                 <option value="intomm">Inch to MM</option>`;
//         } else if (cat.value== "area") {
//             units.innerHTML = `
//             <option value="select">Select Units</option>
//             <option value="smtoskm">Sq M (m²) to Sq FT (ft²)</option>
//             <option value="skmtosm">Sq FT (ft²) to Sq M (m²)</option>
//             <option valuem  ="skmtosmi">Sq KM (km²) to Sq MI (mi²)</option>
//             <option value="smitoskm">Sq MI (mi²) to Sq KM (km²)</option>
//             <option value="acretohec">Acre to Hectare</option>
//             <option value="hectoacre">Hectare to Acre</option>`;
//         } else if (cat.value == "speed") {
//             console.log = 698534
//             units.innerHTML = `
//             <option value="select">Select Units</option>
//                <option value="kmphtomph">KM/H to M/H</option>
//                <option value="mphtokmph">M/H to KM/H</option>
//                <option value="mstofts">M/S to FT/S</option>
//                <option value="ftstoms">FT/S to M/S</option>`
//         } else if (cat.value == "weight") {
//             units.innerHTML = `
//                 <option value="select">Select Units</option>
//                <option value="kgtolb">KG to Pound (lb)</option>
//                <option value="lbtokg">Pound (lb) to KG</option>
//                <option value="gtooz">Gram to Ounce (oz)</option>
//                <option value="oztog">Ounce (oz) to Gram</option>
//             `
//         } else if (cat.value == "temprature") {
//             units.innerHTML = `
//                  <option value="select">Select Units</option>
//                <option value="ctof">Celsius (°C) (°C) to Fahrenheit (°F)</option>
//                <option value="ftoc">Fahrenheit (°F) to Celsius (°C) (°C)</option>
//                <option value="ctok">Celsius (°C) to Kelvin</option>
//                <option value="ktoc">Kelvin to Celsius (°C)</option>
//                <option value="ftok">Fahrenheit (°F) to Kelvin</option>
//                <option value="ktof">Kelvin to Fahrenheit (°F)</option>
//             `
//         } else if (cat.value == "volume") {
//             units.innerHTML = `

//                <option value="select">Select Units</option>
//                <option value="ltogal">Liter to Gallon</option>
//                <option value="galtol">Gallon to Liter</option>
//                <option value="mltooz">ML to OZ</option>
//                <option value="oztoml">OZ to ML</option>
//             `
//         } else {
//             units.innerHTML = `

//                <option value="select">Select Units</option>
//                <option value="sectom">Seconds to Minutes</option>
//                <option value="mtosec">Minutes to Seconds</option>
//                <option value="mtoh">Minutes to Hours</option>
//                <option value="htom">Hours to Minutes</option>
//                <option value="dtow">Days to Weeks</option>
//                <option value="wtod">Weeks to Days</option>
//             `
//         }
//     } else {
//         units.disabled = true
//     }
// })


// units.addEventListener("change", () => {
//     if (units.value != "select") {
//         conBtn.disabled = false
//     } else {
//         input.placeholder = "Input"
//         output.placeholder = "Output"
//         conBtn.disabled = true
//     }
//     input.value = ""
//     output.value = ""
//     if (units.value === "kmtomile") {
//         input.placeholder = "KM"
//         output.placeholder = "Mile"

//     }
// })

// conBtn.addEventListener('click', () => {

//     lhs = input.value
//     if (isNaN(lhs)) output.value = "Numbers Only"

//     else {
//         if (cat.value === "length") {
//             if (units.value === "kmtomile") kmtomile(lhs)
//             if (units.value === "miletokm") miletokm(lhs)
//             if (units.value === "metertoft") metertoft(lhs)
//             if (units.value === "fttometer") fttometer(lhs)
//             if (units.value === "cmtoin") cmtoin(lhs)
//             if (units.value === "intocm") intocm(lhs)
//             if (units.value === "mmtoin") mmtoin(lhs)
//             if (units.value === "intomm") intomm(lhs)
//         }

//     }
// })
// All functions and logic are now combined into a single complete script
const input = document.getElementById('in')
const output = document.getElementById('ou')
const units = document.getElementById('unit')
const cat = document.getElementById('cat')
const conBtn = document.getElementById('cBtn')
let lhs
conBtn.disabled = true

function setOutput(value, unit) {
    output.value = `${parseFloat(value).toFixed(2)} ${unit}`
}
function errorOut(msg) {
    output.value = msg
}

// --- Length Conversions ---
function kmtomile(lhs) { lhs === "" ? errorOut("Enter KM") : setOutput(Number(lhs) * 0.6213712, "mi") }
function miletokm(lhs) { lhs === "" ? errorOut("Enter Mile") : setOutput(Number(lhs) * 1.609344, "km") }
function metertoft(lhs) { lhs === "" ? errorOut("Enter Meter") : setOutput(Number(lhs) * 3.28039, "ft") }
function fttometer(lhs) { lhs === "" ? errorOut("Enter Foot") : setOutput(Number(lhs) * 0.3048, "m") }
function cmtoin(lhs) { lhs === "" ? errorOut("Enter CM") : setOutput(Number(lhs) * 0.3937, "in") }
function intocm(lhs) { lhs === "" ? errorOut("Enter Inch") : setOutput(Number(lhs) * 2.54, "cm") }
function mmtoin(lhs) { lhs === "" ? errorOut("Enter MM") : setOutput(Number(lhs) * 0.03937, "in") }
function intomm(lhs) { lhs === "" ? errorOut("Enter Inch") : setOutput(Number(lhs) * 25.4, "mm") }

// --- Area ---
function smtoskm(lhs) { lhs === '' ? errorOut('Enter m²') : setOutput(Number(lhs) * 10.7639, 'ft²') }
function skmtosm(lhs) { lhs === '' ? errorOut('Enter ft²') : setOutput(Number(lhs) * 0.092903, 'm²') }
function skmtosmi(lhs) { lhs === '' ? errorOut('Enter km²') : setOutput(Number(lhs) * 0.386102, 'mi²') }
function smitoskm(lhs) { lhs === '' ? errorOut('Enter mi²') : setOutput(Number(lhs) * 2.58999, 'km²') }
function acretohec(lhs) { lhs === '' ? errorOut('Enter Acre') : setOutput(Number(lhs) * 0.404686, 'Ha') }
function hectoacre(lhs) { lhs === '' ? errorOut('Enter Hectare') : setOutput(Number(lhs) * 2.47105, 'Acre') }

// --- Speed ---
function kmphtomph(lhs) { lhs === '' ? errorOut('Enter KM/H') : setOutput(Number(lhs) * 0.621371, 'MPH') }
function mphtokmph(lhs) { lhs === '' ? errorOut('Enter MPH') : setOutput(Number(lhs) * 1.60934, 'KM/H') }
function mstofts(lhs) { lhs === '' ? errorOut('Enter M/S') : setOutput(Number(lhs) * 3.28084, 'FT/S') }
function ftstoms(lhs) { lhs === '' ? errorOut('Enter FT/S') : setOutput(Number(lhs) * 0.3048, 'M/S') }

// --- Weight ---
function kgtolb(lhs) { lhs === '' ? errorOut('Enter KG') : setOutput(Number(lhs) * 2.20462, 'lb') }
function lbtokg(lhs) { lhs === '' ? errorOut('Enter lb') : setOutput(Number(lhs) * 0.453592, 'kg') }
function gtooz(lhs) { lhs === '' ? errorOut('Enter g') : setOutput(Number(lhs) * 0.035274, 'oz') }
function oztog(lhs) { lhs === '' ? errorOut('Enter oz') : setOutput(Number(lhs) * 28.3495, 'g') }

// --- Temperature ---
function ctof(lhs) { lhs === '' ? errorOut('Enter °C') : setOutput((Number(lhs) * 9 / 5 + 32), '°F') }
function ftoc(lhs) { lhs === '' ? errorOut('Enter °F') : setOutput((Number(lhs) - 32) * 5 / 9, '°C') }
function ctok(lhs) { lhs === '' ? errorOut('Enter °C') : setOutput(Number(lhs) + 273.15, 'K') }
function ktoc(lhs) { lhs === '' ? errorOut('Enter K') : setOutput(Number(lhs) - 273.15, '°C') }
function ftok(lhs) { lhs === '' ? errorOut('Enter °F') : setOutput((Number(lhs) - 32) * 5 / 9 + 273.15, 'K') }
function ktof(lhs) { lhs === '' ? errorOut('Enter K') : setOutput((Number(lhs) - 273.15) * 9 / 5 + 32, '°F') }

// --- Volume ---
function ltogal(lhs) { lhs === '' ? errorOut('Enter Liter') : setOutput(Number(lhs) * 0.264172, 'Gal') }
function galtol(lhs) { lhs === '' ? errorOut('Enter Gallon') : setOutput(Number(lhs) * 3.78541, 'L') }
function mltooz(lhs) { lhs === '' ? errorOut('Enter mL') : setOutput(Number(lhs) * 0.033814, 'oz') }
function oztoml(lhs) { lhs === '' ? errorOut('Enter oz') : setOutput(Number(lhs) * 29.5735, 'mL') }

// --- Time ---
function sectom(lhs) { lhs === '' ? errorOut('Enter Seconds') : setOutput(Number(lhs) / 60, 'Min') }
function mtosec(lhs) { lhs === '' ? errorOut('Enter Minutes') : setOutput(Number(lhs) * 60, 'Sec') }
function mtoh(lhs) { lhs === '' ? errorOut('Enter Minutes') : setOutput(Number(lhs) / 60, 'Hr') }
function htom(lhs) { lhs === '' ? errorOut('Enter Hours') : setOutput(Number(lhs) * 60, 'Min') }
function dtow(lhs) { lhs === '' ? errorOut('Enter Days') : setOutput(Number(lhs) / 7, 'Weeks') }
function wtod(lhs) { lhs === '' ? errorOut('Enter Weeks') : setOutput(Number(lhs) * 7, 'Days') }

// Dropdown control logic
units.disabled = true

cat.addEventListener("change", () => {
    if (cat.value !== "select") {
        units.disabled = false
        if (cat.value === "length") {
            units.innerHTML = ` 
                <option value="select">Select Units</option>
                <option value="kmtomile">KM to Mile</option>
                <option value="miletokm">Mile to KM</option>
                <option value="cmtoin">CM to Inch</option>
                <option value="intocm">Inch to CM</option>
                <option value="mmtoin">MM to Inch</option>
                <option value="intomm">Inch to MM</option>
                <option value="fttometer">Foot to Meter</option>
                <option value="metertoft">Meter To Foot</option>
                `
        } else if (cat.value === "area") {
            units.innerHTML = `
            <option value="select">Select Units</option>
            <option value="acretohec">Acre to Hectare</option>
            <option value="hectoacre">Hectare to Acre</option>
            <option value="smtoskm">Sq M (m²) to Sq FT (ft²)</option>
            <option value="skmtosm">Sq FT (ft²) to Sq M (m²)</option>
            <option value="skmtosmi">Sq KM (km²) to Sq MI (mi²)</option>
            <option value="smitoskm">Sq MI (mi²) to Sq KM (km²)</option>
            `
        } else if (cat.value === "speed") {
            units.innerHTML = `
            <option value="select">Select Units</option>
            <option value="mstofts">M/S to FT/S</option>
            <option value="ftstoms">FT/S to M/S</option>
            <option value="kmphtomph">KM/H to MPH</option>
            <option value="mphtokmph">MPH to KM/H</option>
            `
        } else if (cat.value === "weight") {
            units.innerHTML = `
                <option value="select">Select Units</option>
                <option value="lbtokg">Pound (lb) to KG</option>
               <option value="kgtolb">KG to Pound (lb)</option>
               <option value="oztog">Ounce (oz) to Gram</option>
               <option value="gtooz">Gram to Ounce (oz)</option>
               `
        } else if (cat.value === "temprature") {
            units.innerHTML = `
                 <option value="select">Select Units</option>
                 <option value="ctok">Celsius (°C) to Kelvin</option>
                 <option value="ktoc">Kelvin to Celsius (°C)</option>
                 <option value="ftok">Fahrenheit (°F) to Kelvin</option>
                 <option value="ktof">Kelvin to Fahrenheit (°F)</option>
                 <option value="ctof">Celsius (°C) to Fahrenheit (°F)</option>
                 <option value="ftoc">Fahrenheit (°F) to Celsius (°C)</option>
               `
        } else if (cat.value === "volume") {
            units.innerHTML = `
               <option value="select">Select Units</option>
               <option value="oztoml">OZ to ML</option>
               <option value="mltooz">ML to OZ</option>
               <option value="galtol">Gallon to Liter</option>
               <option value="ltogal">Liter to Gallon</option>
               `
        } else if (cat.value === "time") {
            units.innerHTML = `
               <option value="select">Select Units</option>
               <option value="wtod">Weeks to Days</option>
               <option value="dtow">Days to Weeks</option>
               <option value="mtoh">Minutes to Hours</option>
               <option value="htom">Hours to Minutes</option>
               <option value="sectom">Seconds to Minutes</option>
               <option value="mtosec">Minutes to Seconds</option>
               `
        }
    } else {
        units.disabled = true
    }
})

units.addEventListener("change", () => {
    if (units.value !== "select") {
        conBtn.disabled = false
    } else {
        input.placeholder = "Input"
        output.placeholder = "Output"
        conBtn.disabled = true
    }
    input.value = ""
    output.value = ""
})

conBtn.addEventListener('click', () => {
    lhs = input.value
    if (isNaN(lhs)) return errorOut("Numbers Only")
    const fn = {
        kmtomile, miletokm, metertoft, fttometer, cmtoin, intocm, mmtoin, intomm,
        smtoskm, skmtosm, skmtosmi, smitoskm, acretohec, hectoacre,
        kmphtomph, mphtokmph, mstofts, ftstoms,
        kgtolb, lbtokg, gtooz, oztog,
        ctof, ftoc, ctok, ktoc, ftok, ktof,
        ltogal, galtol, mltooz, oztoml,
        sectom, mtosec, mtoh, htom, dtow, wtod
    }
    if (fn[units.value]) fn[units.value](lhs)
})
