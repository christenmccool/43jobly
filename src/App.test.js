import { render, asFragment } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders without crashing', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
});

test('matches snapshot', () => {
  const {asFragment} = render(<MemoryRouter><App /></MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
});

test('renders nav bar and home page', () => {
  const {getByText} = render(<MemoryRouter><App /></MemoryRouter>);

  expect(getByText('Jobly')).toBeInTheDocument();
  expect(getByText('Login')).toBeInTheDocument();
  expect(getByText('Signup')).toBeInTheDocument();
  expect(getByText('Home Page Welcome Message')).toBeInTheDocument();
});
