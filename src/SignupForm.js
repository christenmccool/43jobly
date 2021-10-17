import React, {useState} from 'react';
import './Form.css';

const SignupForm = ({signup}) => {
  const initialFormData = {username: "", firstName: "", lastName: "", email: "", password: ""}
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    signup(formData)
    setFormData(initialFormData);
  }

  return (
    <div className="Form">
      <h1 className="Form-title">Sign Up</h1>
      <form className="Form-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input 
          id="username" 
          name="username" 
          type="text" 
          value={FormData.username}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input 
          id="password" 
          name="password" 
          type="password" 
          value={FormData.password}
          onChange={handleChange}
          required
        />
        <label htmlFor="firstName">First name</label>
        <input 
          id="firstName" 
          name="firstName" 
          type="text" 
          value={FormData.firstName}
          onChange={handleChange}
          required
        />
        <label htmlFor="lastName">Last name</label>
        <input 
          id="lastName" 
          name="lastName" 
          type="text" 
          value={FormData.lastName}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input 
          id="email" 
          name="email" 
          type="email" 
          value={FormData.email}
          onChange={handleChange}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SignupForm;