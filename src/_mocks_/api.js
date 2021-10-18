// export default { 
//   loginUser: jest.fn(),
//   getUser: jest.fn(),
//   getCompanies: jest.fn()
// }


function mockApi () {
  return (
    {
      loginUser: jest.fn(),
      getUser: jest.fn(),
      getCompanies: jest.fn()
    }
  )
}

export  {mockApi};