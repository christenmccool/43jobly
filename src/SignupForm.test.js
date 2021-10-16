import { render, asFragment } from '@testing-library/react';
import SignupForm from './SignupForm';

test('if it renders without crashing', () => {
  render(<SignupForm />);
});

test('if it matches snapshot', () => {
  const {asFragment} = render(<SignupForm />);
  expect(asFragment()).toMatchSnapshot();
});