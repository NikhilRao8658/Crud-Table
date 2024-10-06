
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Add() {
    let [values, setValues] = useState({ name: "", email: "" });
    let navigate = useNavigate();

    
    let change = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    
    function Add(e) {
        e.preventDefault();
        axios
            .post("http://localhost:6060/user", values)
            .then(() => {
                navigate('/'); 
            })
            .catch((error) => console.error("Error adding user:", error));
    }

    return (
        <>
            <h2>Add New User</h2>
            <form>
                <input
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    value={values.name}
                    onChange={change}
                />
                <br />
                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={values.email}
                    onChange={change}
                />
                <br />
                <button onClick={Add}>Add User</button>
            </form>
        </>
    );
}
