import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const LOGIN = () => {
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        uname: '',
        pass: '',
        validationError: '',
    });

    const inputChangeHandler = (event) => {
        const { name, value } = event.target;
        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            [name]: value,
        }));
    };

    const validateData = async (event) => {
        event.preventDefault();
      
        try {
                await axios.get("http://localhost:3306/api/checkUser?uname=myusername&pass=mypassword");
                window.alert('Data inserted successfully!');
                navigate('/dashboard', {state:{employee}});
              } catch (error) {
                window.alert('Error inserting data:', error.message);
              }
    };
    const clearForm = () => {
        setEmployee({
            uname: '',
            pass: ''
           
        });
        
    };

    return (

        <div className='container text-center pb-2' >
            <form onSubmit={validateData}>
                <label>User Name : </label>
                <input type='text' name='uname' className='form-control' value={employee.uname} onChange={inputChangeHandler} /><br /><span id='msg'></span><br />
           <label>Password : </label>
                <input type='password' name='pass' className='form-control' value={employee.pass} onChange={inputChangeHandler} /><br /><span id='msg'></span><br />
                <button type='submit' >Sign Up</button>&nbsp;&nbsp;<button type='button' onClick={clearForm}>Clear</button><br/>
                <Link to="/signup">New User</Link>

            </form>
        </div>
    )
}



export default LOGIN;