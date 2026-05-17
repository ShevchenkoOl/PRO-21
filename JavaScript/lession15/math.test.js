import { test, expect } from 'vitest';
import { add } from './math.js'


test("Фкнкция add должна правильно складывать два числа", () => { 
    const result = add(2, 3);
    expect(result).toBe(5);

    
})
