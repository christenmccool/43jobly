import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CompanyCard from './App';


test('if it renders without crashing', () => {
  render(<MemoryRouter><CompanyCard  
                        handle='anderson-arias-morrow'
                        name='Anderson, Arias and Morrow'
                        logoUrl='/logos/logo3.png'
                        description='Somebody program how I. Face give away discussion view act inside. Your official relationship administration here.'
                      />
                      </MemoryRouter>);
});

test('if it matches snapshot', () => {
  const {asFragment} = render(<MemoryRouter><CompanyCard  
                                handle='anderson-arias-morrow'
                                name='Anderson, Arias and Morrow'
                                logoUrl='/logos/logo3.png'
                                description='Somebody program how I. Face give away discussion view act inside. Your official relationship administration here.'
                              />
                              </MemoryRouter>);

  expect(asFragment()).toMatchSnapshot();
});



