import { describe, test, expect } from 'vitest';
import { fibonacci } from '../src/actividad1';
import { esPinValido } from '../src/actividad1';

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


describe("Función esPinValido", () => {

  test("Debe devolver false si el PIN es null", () => {
      expect(esPinValido(null)).toBe(false);
  });

  test("Debe devolver false si el PIN es undefined", () => {
      expect(esPinValido(undefined)).toBe(false);
  });

  test("Debe devolver false si el PIN es una cadena vacía", () => {
      expect(esPinValido("")).toBe(false);
  });

  test("PIN de longitud 4 válido", () => {
      expect(esPinValido("1234")).toBe(true);
  });

  test("PIN de longitud 6 válido", () => {
      expect(esPinValido("123456")).toBe(true);
  });

  test("Debe devolver false con longitud distinta a 4 o 6", () => {
      expect(esPinValido("123")).toBe(false);
      expect(esPinValido("12345")).toBe(false);
      expect(esPinValido("1234567")).toBe(false);
  });

  test("Debe devolver false si contiene letras", () => {
      expect(esPinValido("12a4")).toBe(false);
  });

  test("Debe devolver false si contiene símbolos", () => {
      expect(esPinValido("12-4")).toBe(false);
      expect(esPinValido("1111 ")).toBe(false);
  });

  test("Debe devolver false si todos los dígitos son iguales", () => {
      expect(esPinValido("1111")).toBe(false);
      expect(esPinValido("999999")).toBe(false);
  });

  test("Debe devolver true con un PIN válido (ni vacío, ni letras, ni repetidos, longitud correcta)", () => {
      expect(esPinValido("5839")).toBe(true);
      expect(esPinValido("482510")).toBe(true);
  });
});