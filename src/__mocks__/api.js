export default { 
  loginUser: jest.fn().mockResolvedValue({}),
  getUser: jest.fn().mockResolvedValue({}),
  getCompanies: jest.fn().mockResolvedValue([]),
  registerUser: jest.fn().mockResolvedValue([])
}


// function mockApi () {
//   return (
//     {
//       loginUser: jest.fn(),
//       getUser: jest.fn(),
//       getCompanies: jest.fn()
//     }
//   )
// }

// export  {mockApi};


