import { render, asFragment } from '@testing-library/react';
import JobPage from './JobPage';

test('if it renders without crashing', () => {
  render(<JobPage />);
});

test('if it matches snapshot', () => {
  const {asFragment} = render(<JobPage />);
  expect(asFragment()).toMatchSnapshot();
});

