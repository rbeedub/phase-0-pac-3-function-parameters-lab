function introduction (name) {
    return(`Hi, my name is ${name}.`)
}
console.log("Bobby")

function introductionWithLanguage (name,language) {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
console.log(`Nadine`, `JavaScript`)

function introductionWithLanguageOptional (name,language = "JavaScript"); {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
console.log(`Nadine`, `C++`)