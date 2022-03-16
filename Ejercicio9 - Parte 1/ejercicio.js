function sumar(a,b) {
    if(isNaN(a) || isNaN(b)) {
        throw "Error. A y B deben ser números";
    } else {
        return a + b;
    }
}

console.log(sumar(2,3));