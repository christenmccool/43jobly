import React, {useState} from 'react';
import './Form.css';

const LoginForm = ({login}) => {
  const initialFormData = {username: "", password: ""}
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    login(formData);
    setFormData(initialFormData);
  }

  return (
    <div className="Form">
      <h1 className="Form-title">Profile</h1>
      <form className="Form-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input 
          id="username" 
          name="username" 
          type="text" 
          value={formData.username}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input 
          id="password" 
          name="password" 
          type="password" 
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default LoginForm;