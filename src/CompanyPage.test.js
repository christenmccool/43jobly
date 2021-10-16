import { render, asFragment } from '@testing-library/react';
import CompanyPage from './CompanyPage';

test('if it renders without crashing', () => {
  render(<CompanyPage />);
});

test('if it matches snapshot', () => {
  const {asFragment} = render(<CompanyPage />);
  expect(asFragment()).toMatchSnapshot();
});
