import { render, screen } from '@testing-library/react';
import {isValidArray} from './utils/common';
import {isValidDate, toTimeString} from './utils/datetime';


it('Array validation',()=>{
  expect(isValidArray([])).toBe(false);
  expect(isValidArray([1,2,3])).toBe(true);
});

it('Date validation',()=>{
  expect(isValidDate('test')).toBe(false);
  expect(isValidDate(new Date())).toBe(true);
});

it('Time format',()=>{
  expect(toTimeString('test')).toEqual(null);
  expect(toTimeString(new Date('15 Mar 2021 10:30:05'))).toEqual('10:30:05 AM');
});
