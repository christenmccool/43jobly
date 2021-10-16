import { render, asFragment, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Routes from './Routes';

test('if renders without crashing', () => {
  render(<MemoryRouter><Routes /></MemoryRouter>);
});

test('if matches snapshot', () => {
  const {asFragment} = render(<MemoryRouter><Routes /></MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
});