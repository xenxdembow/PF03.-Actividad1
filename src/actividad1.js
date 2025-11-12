function fibonacci(n) {
    if (n < 0 || !Number.isInteger(n)) {
        throw new RangeError("solo números enteros ≥ 0");
    }

    if (n === 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

export function esPinValido(pin) {
    if (pin === null || pin === undefined) return false;
  
    const str = String(pin);

    if (str.length !== 4 && str.length !== 6) return false;

    if (!/^\d+$/.test(str)) return false;

    if (/^(\d)\1+$/.test(str)) return false;
  
    return true;
  }

export{
    fibonacci,
    esPinValido
}
