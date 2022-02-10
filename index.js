var myAge = window.prompt("How old are you?")
myAge = parseInt(myAge)
console.log(myAge)

// Give a 50% discount if older than 55, a 25% discount if 55, and no discount if younger than 55

debugger
if(myAge > 55) {
    console.log('50%!')
} 
if (myAge == 55) {
    console.log('25%')
} else {
    console.log('no discount')
}