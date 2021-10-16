import React, {useState, useContext} from 'react';
import UserContext from './UserContext';
import './Form.css';

const ProfileForm = ({editProfile}) => {
  const user = useContext(UserContext);

  const initialFormData = {...user, password: ""};
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    editProfile(formData.username, 
                  {password: formData.password, 
                    firstName: formData.firstName, 
                    lastName: formData.lastName, 
                    email: formData.email
                  }
                );
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
          value={user.username}
          readOnly
          disabled
        />
        <label htmlFor="firstName">First name</label>
        <input 
          id="firstName" 
          name="firstName" 
          type="text" 
          placeholder={user.firstName} 
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <label htmlFor="lastName">Last name</label>
        <input 
          id="lastName" 
          name="lastName" 
          type="text" 
          placeholder={user.lastName} 
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input 
          id="email" 
          name="email" 
          type="email" 
          placeholder={user.email} 
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Confirm password to make changes:</label>
        <input 
          id="password" 
          name="password" 
          type="password" 
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button>Save Changes</button>
      </form>
    </div>
  )
}

export default ProfileForm;