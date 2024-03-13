import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        uname: '',
        fname: '',
        lname: '',
        dob: '',
        email: '',
        mobile: '',
        add: '',
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

    const validateData = () => {
        // Add your validation logic here
        // For simplicity, let's assume all fields are required

        const { uname, fname, lname, email, mobile, add, dob, pass } = employee;

        if (!uname || !fname || !lname || !email || !mobile || !add || !dob || !pass) {
            setEmployee((prevEmployee) => ({
                ...prevEmployee,
                validationError: 'All fields are required.',
            }));
            return false;
        }
        if (!uname.match("^[a-zA-Z0-9]{3,10}$")) {
           window.alert("User Name must contain AlphaNumric value and length between 3 to 10 character");
            return false;
        }



        if (!fname.match("^[a-zA-Z]{3,20}$")) {
            window.alert("First Name must contain Alphabate value and length between 3 to 20 character");
            return false;
        }


        if (!lname.match("^[a-zA-Z]{3,20}$")) {
            window.alert("Last Name must contain Alphabate value and length between 3 to 20 character");
            return false;
        }


        if (!email.match("/^[^\s@]+@[^\s@]+\.[^\s@]+$/")) {
            window.alert("Invalid Email");
            return false;
        }


        if (!mobile.match("^[0-9]{10}$")) {
            window.alert("Mobile No must only contain numeric value of length 10 digit");
            return false;
        }


        if (!pass.match({
            minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1,
            minSymbols: 1
        })) {
            window.alert("Not Strong Password");
            return false;
        }


        if (!add.match("^[a-zA-Z\s,]$")) {
            window.alert("Address is in wrong formate");
            return false;
        }


       

        return true;
    };

    const addEmployee = async (event) => {
        event.preventDefault();

        if (validateData()) {
            // If data is valid, make the API call
            try {
                await axios.post('http://localhost:3001/api/insertData', employee);
                window.alert('Data inserted successfully!');
                navigate('/login');
              } catch (error) {
                window.alert('Error inserting data:', error.message);
              }
            }
            
    };
    const clearForm = () => {
        setEmployee({
            uname: '',
            fname: '',
            lname: '',
            dob: '',
            email: '',
            mobile: '',
            add: '',
            pass: '',
            validationError: '',
        });
        
    };


    return (

        <div className='container text-center pb-2' >
            <form onSubmit={addEmployee}>
                <label>User Name : </label>
                <input type='text' name='uname' className='form-control' value={employee.uname} onChange={inputChangeHandler} /><br /><span id='msg'></span><br />
                <label>First Name : </label>
                <input type='text' name='fname' className='form-control' value={employee.fname} onChange={inputChangeHandler} /><br /><span id='msg'></span><br />
               <label>Last Name : </label>
                <input type='text' name='lname' className='form-control' value={employee.lname} onChange={inputChangeHandler} /><br /><span id='msg'></span><br />
                <label>DOB : </label>
                <input type='date' name='dob' className='form-control' value={employee.dob} onChange={inputChangeHandler} /><br /><span id='msg'></span><br />
                <label>Email Id : </label>
                <input type='email' name='email' className='form-control' value={employee.email} onChange={inputChangeHandler} /><br /><span id='msg'></span><br />
                <label>Mobile No : </label>
                <input type='text' name='mobile' className='form-control' value={employee.mobile} onChange={inputChangeHandler} /><br /><span id='msg'></span><br />
                <label>Address : </label>
                <input type='text' name='add' className='form-control' value={employee.add} onChange={inputChangeHandler} /><br /><span id='msg'></span><br />
                <label>Password : </label>
                <input type='password' name='pass' className='form-control' value={employee.pass} onChange={inputChangeHandler} /><br /><span id='msg'></span><br />
                <button type='submit' >Sign Up</button>&nbsp;&nbsp;<button type='button' onClick={clearForm}>Clear</button><br/>
                <Link to="/login">Already User</Link>
            </form>
            <h4 >
            {employee.validationError && <p style={{ color: 'red' }}>{employee.validationError}</p>}
            </h4>
        </div>
    )
}



export default SignUp;