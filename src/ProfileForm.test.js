import { render, asFragment } from '@testing-library/react';
import ProfileForm from './LoginForm';

test('if it renders without crashing', () => {
  render(<ProfileForm />);
});

test('if it matches snapshot', () => {
  const {asFragment} = render(<ProfileForm />);
  expect(asFragment()).toMatchSnapshot();
});