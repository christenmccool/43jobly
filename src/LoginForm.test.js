import { render, asFragment } from '@testing-library/react';
import LoginForm from './LoginForm';

test('if it renders without crashing', () => {
  render(<LoginForm />);
});

test('if it matches snapshot', () => {
  const {asFragment} = render(<LoginForm />);
  expect(asFragment()).toMatchSnapshot();
});