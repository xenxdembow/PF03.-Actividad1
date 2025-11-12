const { fibonacci } = require('../src/actividad1');

describe('Función fibonacci', () => {
  test('debe devolver 0 cuando n es 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('debe devolver 1 cuando n es 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('debe devolver la suma de los dos anteriores cuando n >= 2', () => {
    expect(fibonacci(2)).toBe(1);  
    expect(fibonacci(3)).toBe(2);  
    expect(fibonacci(5)).toBe(5);  
    expect(fibonacci(7)).toBe(13); 
  });

  test('debe lanzar RangeError si n es negativo', () => {
    expect(() => fibonacci(-1)).toThrow(RangeError);
    expect(() => fibonacci(-1)).toThrow('solo números enteros ≥ 0');
  });

  test('debe lanzar RangeError si n no es un número entero', () => {
    expect(() => fibonacci(1.5)).toThrow(RangeError);
    expect(() => fibonacci('a')).toThrow(RangeError);
  });
});