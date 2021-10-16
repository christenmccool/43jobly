import { render, asFragment } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CompanyDetail from './CompanyDetail';

test('if it renders without crashing', () => {
  render(<MemoryRouter><CompanyDetail /></MemoryRouter>);
});

test('if it matches snapshot', () => {
  const {asFragment} = render(<MemoryRouter><CompanyDetail /></MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
});

