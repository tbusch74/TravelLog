import React, {useState} from 'react';
import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';

const Login = (props) => {
    const [formState, setFormState] = useState({ 
    username: '', 
    password: '',
    });
    
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };

  const [login, {error}] = useMutation(LOGIN_USER);

    const handleSubmit = async (event) => {
      event.preventDefault();

      try{ const{data} = await login ({ variables: {...formState}});
      Auth.login(data.login.token);
    } catch (e) {console.error(e)}};
  
    return (
      <main className="login">
            <h4 className="card-header">Login</h4>
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
              {error && <div>Login failed</div>}
            </div>
      </main>
    );
};


export default Login;