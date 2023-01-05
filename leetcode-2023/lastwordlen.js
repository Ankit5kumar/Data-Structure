// length of last word in string

function length(string){
    let trim = string.trim();
    let split  = trim.split(" ")
    let newa = split[split.length-1]
    return newa.length;
}
console.log(length("  my name is ankit   "))
