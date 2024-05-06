// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

 test('tests wrong phone number', () => {
  expect(isPhoneNumber("4155901")).toBe(false);
});

test('tests wrong phone number', () => {
  expect(isPhoneNumber("4155801293")).toBe(false);
});

test('tests correct phone number', () => {
  expect(isPhoneNumber("(415)580-1293")).toBe(true);
});

test('tests correct phone number', () => {
  expect(isPhoneNumber("(111)111-1293")).toBe(true);
});

test('tests incorrect email', () => {
  expect(isEmail("aaa@gmail")).toBe(false);
});

test('tests incorrect email', () => {
  expect(isEmail("@gmail.com")).toBe(false);
});


test('tests correct email', () => {
  expect(isEmail("aaa@gmail.com")).toBe(true);
});


test('tests correct email', () => {
  expect(isEmail("aaa@ucsd.edu")).toBe(true);
});

test('tests if not strong password', () => {
  expect(isStrongPassword("1a_")).toBe(false);
});

test('tests if not strong password', () => {
  expect(isStrongPassword("thisistoomanycharactersalthoughtherearenumbersandletters1")).toBe(false);
});

test('tests if strong password', () => {
  expect(isStrongPassword("ABC12553")).toBe(true);
});

test('tests if strong password', () => {
  expect(isStrongPassword("abc101888")).toBe(true);
});

test('tests if incorrect date', () => {
  expect(isDate("011/01/1111")).toBe(false);
});

test('tests if incorrect date', () => {
  expect(isDate("01/01/11")).toBe(false);
});

test('tests if correct date', () => {
  expect(isDate("01/01/1111")).toBe(true);
});

test('tests if correct date', () => {
  expect(isDate("1/1/1111")).toBe(true);
});

test('tests if incorrect hex color', () => {
  expect(isHexColor("#1")).toBe(false);
});

test('tests if incorrect hex color', () => {
  expect(isHexColor("#1111111")).toBe(false);
});

test('tests if correct hex color', () => {
  expect(isHexColor("#FF5733")).toBe(true);
});

test('tests if correct hex color', () => {
  expect(isHexColor("#028477")).toBe(true);
});



