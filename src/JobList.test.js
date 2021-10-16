import { render, asFragment } from '@testing-library/react';
import JobList from './JobList';

test('if it renders without crashing', () => {
  render(<JobList jobs={[{title:"Test title 1", salary:100, equity:0.5},{title:"Test title 2", salary:200, equity:0.8}]}/>);
});

test('if it matches snapshot', () => {
  const {asFragment} = render(<JobList jobs={[{title:"Test title 1", salary:100, equity:0.5},{title:"Test title 2", salary:200, equity:0.8}]}/>);
  expect(asFragment()).toMatchSnapshot();
});

test('if it renders title, salary, and equity of jobs', () => {
  const {queryByText} = render(<JobList jobs={[{title:"Test title 1", salary:100, equity:0.5},{title:"Test title 2", salary:200, equity:0.8}]}/>);
  
  expect(queryByText("Test title 1")).toBeInTheDocument();
  expect(queryByText("Salary: 100")).toBeInTheDocument();
  expect(queryByText("Equity: 0.5")).toBeInTheDocument();
  
  expect(queryByText("Test title 2")).toBeInTheDocument();
  expect(queryByText("Salary: 200")).toBeInTheDocument();
  expect(queryByText("Equity: 0.8")).toBeInTheDocument();
});

