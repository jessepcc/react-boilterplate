import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { App } from '../App';

describe(`App`, () => {
  it(`renders`, () => {
    render(<App />);
    expect(true).toBe(true);
  });
});
