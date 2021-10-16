import { render, asFragment } from '@testing-library/react';
import JobCard from './JobCard';

test('if it renders without crashing', () => {
  render(<JobCard />);
});

test('if it matches snapshot', () => {
  const {asFragment} = render(<JobCard />);
  expect(asFragment()).toMatchSnapshot();
});

test('if it renders title, salary, and equity', () => {
  const {queryByText} = render(<JobCard title="Test title" salary={100} equity={0.5} />);
  expect(queryByText("Test title")).toBeInTheDocument();
  expect(queryByText("Salary: 100")).toBeInTheDocument();
  expect(queryByText("Equity: 0.5")).toBeInTheDocument();
});