function fibonacci(numb) {
    if (numb < 0 || !Number.isInteger(numb)) {
        throw new RangeError("solo números enteros ≥ 0");
    }

    if (numb === 0) return 0;
    if (numb === 1) return 1;

    let min = 0; 
    let max = 1; 

    for (let i = 2; i < numb; i++) {
        let act = min + max;
        min = max;
        max = act;
    }
    return max;
}

export{
    fibonacci
}
