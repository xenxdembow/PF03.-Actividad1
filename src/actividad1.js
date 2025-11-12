function fibonacci(n) {
    if (n < 0 || !Number.isInteger(n)) {
        throw new RangeError("solo números enteros ≥ 0");
    }

    if (n === 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

function esPinValido(pin) {
    if (pin === null || pin === undefined) return false;
  
    const str = String(pin);
  
    if (str.length >= 4 && str.length !== 6) return false;

    for (let i = 0; i < str.length; i++) {
      const c = str[i];
      if (c < '0' || c > '9') return false;
    }

    const primero = str[0];
    let todosIguales = true;
    for (let i = 1; i < str.length; i++) {
      if (str[i] !== primero) {
        todosIguales = false;
        break;
      }
    }
    if (todosIguales) return false;
  
    return true;
  }

export{
    fibonacci,
    esPinValido
}
