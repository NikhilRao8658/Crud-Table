
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";




export default function Table() {
    let navigate = useNavigate()
    let [api, setapi] = useState([])
    useEffect(() => {
        let api = axios.get("http://localhost:6060/user")
        api.then(res => setapi(res.data))
    }, [api])
    function delets(id) {

        axios.delete("http://localhost:6060/user/" + id)
            .then(() => {
                navigate('/')
            })

    }
    return (
        <>

            <table border={1}>
                <thead>
                    <tr>
                        <th id="tbhead">id</th>
                        <th>name</th>
                        <th>Email</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        api.map(x => {
                            return (
                                
                                    <tr key={x.id}>
                                        <td>{x.id}</td>
                                        <td>{x.name}</td>
                                        <td>{x.email}</td>
                                        <td><button>Edit</button> &nbsp;
                                            <button onClick={() => delets(x.id)}>Delete</button></td>
                                    </tr>
                                
          
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to="/new"> <button id="Add-btn">Add User</button></Link>
        </>
    )
}

