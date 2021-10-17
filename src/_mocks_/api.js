export default 
  { loginUser: jest.fn(),
    getUser: jest.fn(),
    getCompanies: jest.fn()
  }
;

// const mockedApi = ({
//   loginUser: jest.fn(),
//   getUser: jest.fn(),
//   getCompanies: jest.fn()
// };
// )


// export default () => jest.mock('./api', () => {
//   return(
//     { loginUser: jest.fn(),
//       getUser: jest.fn(),
//       getCompanies: jest.fn()
//     }
//   )
// });
