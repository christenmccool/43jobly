import { render, asFragment, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';


test('if it renders without crashing', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
});

test('if it matches snapshot', () => {
  const {asFragment} = render(<MemoryRouter><App /></MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
});

test('if log in works', async () => {
  const {getByText, queryByLabelText, debug} = render(<MemoryRouter><App /></MemoryRouter>);
  
  //Log in as test user
  const loginLink = getByText("Login");
  fireEvent.click(loginLink);
  const username = queryByLabelText(`Username`);
  const password = queryByLabelText(`Password`);
  const loginBtn = getByText("Submit");
  fireEvent.change(username, {target: {value: "testuser"}});
  fireEvent.change(password, {target: {value: "password"}});
  fireEvent.click(loginBtn);
  await waitFor(() => expect(getByText(`Log out testuser`)).toBeInTheDocument());

  const homeBtn = getByText("Jobly");
  fireEvent.click(homeBtn);
  expect(getByText(`Welcome back, Test`)).toBeInTheDocument();
});

test('if sign up works', async () => {
  const {getByText, queryByLabelText, queryByPlaceholderText, debug} = render(<MemoryRouter><App /></MemoryRouter>);
  
  const signupLink = getByText("Signup");
  fireEvent.click(signupLink);
  const username = queryByLabelText(`Username`);
  const password = queryByLabelText(`Password`);
  const firstName = queryByLabelText(`First name`);
  const lastName = queryByLabelText(`Last name`);
  const email = queryByLabelText(`Email`);

  const signupBtn = getByText("Submit");
  fireEvent.change(username, {target: {value: "testingtesting"}});
  fireEvent.change(password, {target: {value: "password"}});
  fireEvent.change(firstName, {target: {value: "Testy"}});
  fireEvent.change(lastName, {target: {value: "McText"}});
  fireEvent.change(email, {target: {value: "test@mail.com"}});
  // fireEvent.click(signupBtn);
  // await waitFor(() => expect(getByText(`Log out testingtesting`)).toBeInTheDocument());

  // // debug();
  // const homeBtn = getByText("Jobly");
  // fireEvent.click(homeBtn);
  // expect(getByText(`Welcome back, Testy`)).toBeInTheDocument();
});

test('if log out works', async () => {
  const {queryByText, queryByLabelText, debug} = render(<MemoryRouter><App /></MemoryRouter>);
  
  //Log in as test user
  const loginLink = queryByText("Login");
  fireEvent.click(loginLink);
  const username = queryByLabelText(`Username`);
  const password = queryByLabelText(`Password`);
  const loginBtn = queryByText("Submit");
  fireEvent.change(username, {target: {value: "testuser"}});
  fireEvent.change(password, {target: {value: "password"}});
  fireEvent.click(loginBtn);
  await waitFor(() => expect(queryByText(`Log out testuser`)).toBeInTheDocument());
  
  const logoutLink = queryByText("Log out testuser");
  fireEvent.click(logoutLink);
  // debug();
  await waitFor(() => expect(queryByText(`Login`)).toBeInTheDocument());
  expect(queryByText(`Log out testuser`)).not.toBeInTheDocument();
});

test('if company page renders', async () => {
  const {getByText, queryByLabelText, queryByPlaceholderText, debug} = render(<MemoryRouter><App /></MemoryRouter>);
  
  //Log in as test user
  const loginLink = getByText("Login");
  fireEvent.click(loginLink);
  const username = queryByLabelText(`Username`);
  const password = queryByLabelText(`Password`);
  const loginBtn = getByText("Submit");
  fireEvent.change(username, {target: {value: "testuser"}});
  fireEvent.change(password, {target: {value: "password"}});
  fireEvent.click(loginBtn);
  await waitFor(() => expect(getByText(`Log out testuser`)).toBeInTheDocument());

  const companiesLink = getByText("Companies");
  fireEvent.click(companiesLink);
  // debug();
  await waitFor(() => expect(queryByPlaceholderText(`Enter search term.`)).toBeInTheDocument());
  expect(getByText(`Anderson, Arias and Morrow`)).toBeInTheDocument();
});

test('if company detail renders', async () => {
  const {getByText, queryByLabelText, queryByPlaceholderText, debug} = render(<MemoryRouter><App /></MemoryRouter>);
  
  //Log in as test user
  const loginLink = getByText("Login");
  fireEvent.click(loginLink);
  const username = queryByLabelText(`Username`);
  const password = queryByLabelText(`Password`);
  const loginBtn = getByText("Submit");
  fireEvent.change(username, {target: {value: "testuser"}});
  fireEvent.change(password, {target: {value: "password"}});
  fireEvent.click(loginBtn);
  await waitFor(() => expect(getByText(`Log out testuser`)).toBeInTheDocument());

  const companiesLink = getByText("Companies");
  fireEvent.click(companiesLink);  

  await waitFor(() => expect(queryByPlaceholderText(`Enter search term.`)).toBeInTheDocument());
  const companyLink = getByText(`Anderson, Arias and Morrow`);
  fireEvent.click(companyLink);  

  await waitFor(() => expect(getByText(`Technical brewer`)).toBeInTheDocument());
  expect(getByText(`Salary: 157000`)).toBeInTheDocument();
});


test('if jobs page renders', async () => {
  const {getByText, queryByLabelText, queryByPlaceholderText, debug} = render(<MemoryRouter><App /></MemoryRouter>);

  //Log in as test user
  const loginLink = getByText("Login");
  fireEvent.click(loginLink);
  const username = queryByLabelText(`Username`);
  const password = queryByLabelText(`Password`);
  const loginBtn = getByText("Submit");
  fireEvent.change(username, {target: {value: "testuser"}});
  fireEvent.change(password, {target: {value: "password"}});
  fireEvent.click(loginBtn);
  await waitFor(() => expect(getByText(`Log out testuser`)).toBeInTheDocument());

  const link = getByText("Jobs");
  fireEvent.click(link);
  // debug();
  await waitFor(() => expect(queryByPlaceholderText(`Enter search term.`)).toBeInTheDocument());
  expect(getByText(`Accommodation manager`)).toBeInTheDocument();
});

