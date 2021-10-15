import { render, asFragment, fireEvent, wait } from '@testing-library/react';
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
  const {getAllByText,getByText} = render(<MemoryRouter><App /></MemoryRouter>);

  expect(getAllByText('Jobly')).toHaveLength(2);
  expect(getByText('Companies')).toBeInTheDocument();
  expect(getByText('Jobs')).toBeInTheDocument();
  expect(getByText('Login')).toBeInTheDocument();
  expect(getByText('Signup')).toBeInTheDocument();
  expect(getByText('All the jobs in one convenient place.')).toBeInTheDocument();
});


test('nav bar works', async () => {
  const {getByText, queryByPlaceholderText, debug} = render(<MemoryRouter><App /></MemoryRouter>);

  expect(queryByPlaceholderText(`Enter search term.`)).not.toBeInTheDocument();

  const link = getByText("Companies");
  fireEvent.click(link);
  // debug();
  await wait(() => expect(queryByPlaceholderText(`Enter search term.`)).toBeInTheDocument());
});

test('company page renders', async () => {
  const {getByText, queryByPlaceholderText, debug} = render(<MemoryRouter><App /></MemoryRouter>);

  const link = getByText("Companies");
  fireEvent.click(link);
  // debug();
  await wait(() => expect(queryByPlaceholderText(`Enter search term.`)).toBeInTheDocument());
  expect(getByText(`Anderson, Arias and Morrow`)).toBeInTheDocument();
});

test('jobs page renders', async () => {
  const {getByText, queryByPlaceholderText, debug} = render(<MemoryRouter><App /></MemoryRouter>);

  const link = getByText("Jobs");
  fireEvent.click(link);
  // debug();
  await wait(() => expect(queryByPlaceholderText(`Enter search term.`)).toBeInTheDocument());
  expect(getByText(`Accommodation manager`)).toBeInTheDocument();
});

