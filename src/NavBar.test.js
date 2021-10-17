import { render, asFragment, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './App';
import axiosMock from "axios";

// jest.mock('axios');

test('if shows companies, jobs, and profile links when user logged in', async () => {
  const {getByText, queryByLabelText, debug} = render(<MemoryRouter><NavBar /></MemoryRouter>);

  // axiosMock.post.mockResolvedValueOnce({ data: {token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNocmlzdGVuIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTYzNDQ3Njg5MX0.fDC8dNCeY3LwKh_SThuJKJ_5soUvjItHM7k6TC4roUU"}});


  //Log in as test user
  const loginLink = getByText("Login");
  fireEvent.click(loginLink);
  const username = queryByLabelText(`Username`);
  const password = queryByLabelText(`Password`);
  const loginBtn = getByText("Submit");
  fireEvent.change(username, {target: {value: "testuser"}});
  fireEvent.change(password, {target: {value: "password"}});
  fireEvent.click(loginBtn);

  await waitFor(() => expect(getByText(`Log out`, {exact: false})).toBeInTheDocument());
  debug();
  // expect(getByText(`Companies`)).toBeInTheDocument();
  // expect(getByText(`Jobs`)).toBeInTheDocument();
});





test('if renders without crashing', () => {
  render(<MemoryRouter><NavBar /></MemoryRouter>);
});

test('if matches snapshot', () => {
  const {asFragment} = render(<MemoryRouter><NavBar /></MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
});

test('if shows jobly, login, and signup links when no user logged in', () => {
  const {getByText, getAllByText, debug} = render(<MemoryRouter><NavBar /></MemoryRouter>);

  expect(getAllByText('Jobly')).toHaveLength(2);
  expect(getByText('Login')).toBeInTheDocument();
  expect(getByText('Signup')).toBeInTheDocument();
});

test('if login and signup links work', async () => {
  const {getByText, queryByLabelText, debug} = render(<MemoryRouter><NavBar /></MemoryRouter>);
  
  expect(queryByLabelText(`Username`)).not.toBeInTheDocument();
  expect(queryByLabelText(`Password`)).not.toBeInTheDocument();
  expect(queryByLabelText(`Email`)).not.toBeInTheDocument();

  const loginLink = getByText("Login");
  fireEvent.click(loginLink);
  expect(queryByLabelText(`Username`)).toBeInTheDocument();
  expect(queryByLabelText(`Password`)).toBeInTheDocument();
  expect(queryByLabelText(`Email`)).not.toBeInTheDocument();

  const signupLink = getByText("Signup");
  fireEvent.click(signupLink);
  expect(queryByLabelText(`Username`)).toBeInTheDocument();
  expect(queryByLabelText(`Password`)).toBeInTheDocument();
  expect(queryByLabelText(`Email`)).toBeInTheDocument();
});


// test('if company and job links work', async () => {
//   const {queryByText, queryByLabelText, debug} = render(<MemoryRouter><NavBar /></MemoryRouter>);

//   //Log in as test user
//   const loginLink = queryByText("Login");
//   fireEvent.click(loginLink);
//   const username = queryByLabelText(`Username`);
//   const password = queryByLabelText(`Password`);
//   const loginBtn = queryByText("Submit");
//   fireEvent.change(username, {target: {value: "testuser"}});
//   fireEvent.change(password, {target: {value: "password"}});
//   fireEvent.click(loginBtn);
//   await waitFor(() => expect(queryByText(`Log out testuser`)).toBeInTheDocument());

//   expect(queryByText(`Companies`)).toBeInTheDocument();
//   expect(queryByText(`Jobs`)).toBeInTheDocument();
  
//   expect(queryByText(`Anderson, Arias and Morrow`)).not.toBeInTheDocument();
//   expect(queryByText(`Accommodation manager`)).not.toBeInTheDocument();

//   const companiesLink = queryByText("Companies");
//   fireEvent.click(companiesLink);
//   await waitFor(() => expect(queryByText(`Anderson, Arias and Morrow`)).toBeInTheDocument());

//   const jobsLink = queryByText("Jobs");
//   fireEvent.click(jobsLink);
//   await waitFor(() => expect(queryByText(`Accommodation manager`)).toBeInTheDocument());
// });
