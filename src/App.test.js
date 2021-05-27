import { render, screen } from '@testing-library/react';
import calculateTax from './calculateTax';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test('calcualteTax(-20)', () => {
  expect(calculateTax(-20)).toBe(0)
})

test('calcualteTax(0)', () => {
  expect(calculateTax(0)).toBe(0)
})

test('calcualteTax(-10)', () => {
  expect(calculateTax(-10)).toBe(0)
})

test('calcualteTax(18201)', () => {
  expect(calculateTax(18201)).toBe(0)
})

test('calcualteTax(18202)', () => {
  expect(calculateTax(18202)).toBe(0.19)
})

test('calcualteTax(18500)', () => {
  expect(calculateTax(18500)).toBe(299*0.19)
})

test('calcualteTax(18500)', () => {
  expect(calculateTax(18500)).toBe(299*0.19)
})

test('calcualteTax(39000)', () => {
  expect(calculateTax(39000)).toBe(4221.675)
})

test('calcualteTax(250000)', () => {
  expect(calculateTax(250000)).toBe(85596.55)
})