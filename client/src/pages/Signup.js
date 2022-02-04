import React, {useState} from 'react';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';

const Signup = () => {
    const [formState, setFormState] = useState({ 
    username: '', 
    email: '',
    password: '',
    });
    
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };


  const [addUser, { error }] = useMutation(ADD_USER);

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const {data} = await addUser({ variables: {...formState}});
        Auth.login(data.addUser.token);
      }catch (e) { console.error(e)};
    };
  
    return (
      <main className="login">
            <h4 className="card-header">Sign Up</h4>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  className="login-form"
                  placeholder="Username"
                  id="username"
                  name="username"
                  type="username"                  
                  value={formState.username}
                  onChange={handleChange}
                />
                <input
                  className="login-form"
                  placeholder="Email"
                  id="email"
                  name="email"
                  type="email"                  
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="login-form"
                  placeholder="Password"
                  id="password"
                  name="password"
                  type="password"                  
                  value={formState.password}
                  onChange={handleChange}
                />
                <button className="login-btn" type="submit">
                  Submit
                </button>
              </form>
              {error && <div>Signup failed</div>}
            </div>
      </main>
    );
};


export default Signup;