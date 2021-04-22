import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Form';
import Users from './Users';
import axios from 'axios';
import schema from './validation/formSchema';
import * as yup from 'yup';


  const initialFormValues = {
    first_name: "",
    last_name: "",
    email: "",
    pwd: "",
    tos: false,
  };
  const initialFormErrors = {
    first_name: "",
    last_name: "",
    email: "",
    pwd: "",
  };
  const initialUsers = [];
  const initialDisabled = true;
  
function App() {
    const [users, setUsers] = useState(initialUsers);
    const [formValues, setFormValues] = useState(initialFormValues); 
    const [formErrors, setFormErrors] = useState(initialFormErrors); 
    const [disabled, setDisabled] = useState(initialDisabled); 
      
    
      const postNewUser = (newUser) => {
          axios
            .post("https://reqres.in/api/users", newUser)
            .then((res) => {
              setUsers([res.data, ...users]);
              setFormValues(initialFormValues);
            })
            .catch((err) => {
              console.log(err);
            });
        };
      
      const inputChange = (name, value) => {
          yup
            .reach(schema, name) 
            .validate(value) 
            .then(() => {
              setFormErrors({
                ...formErrors,
                [name]: "",
              });
            })
            .catch((err) => {
              setFormErrors({
                ...formErrors,
                [name]: err.errors[0],
              });
            });
      
          setFormValues({
            ...formValues,
            [name]: value, 
          });
        };
      
        const formSubmit = () => {
          const newUsers = {
            first_name: formValues.first_name.trim(),
            last_name: formValues.last_name.trim(),
            email: formValues.email.trim(),
            pwd: formValues.pwd.trim(),
            tos: formValues.tos,
          };
          postNewUser(newUsers);
        };
          
            useEffect(() => {
              schema.isValid(formValues).then((valid) => {
                setDisabled(!valid);
              });
            }, [formValues]);
  
  return (
    
    <div className="container">
      <h1>Add New User</h1>
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}/>
          <h1>List of Users</h1>
          {
          users.map((user) => {
        return <Users key={user.id} details={user} />;
      })}
    </div>
    
  );
}

export default App;


