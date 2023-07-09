import { Link } from 'react-router-dom'
import React from 'react'
import { deleteUserById, fetchUserList } from '../../utils'
export default function userData() {
    var countUser = 1;
    const user = fetchUserList()
    const userData = user.map((items, index) => {
        return (
            <tr key={index}>
                <td scope="row">{countUser++}</td>
                <td scope="row">{items.name}</td>
                <td scope="row">{items.email}</td>
                <td>
                    <button style={{ border: "none" }} ><i className="fa fa-edit">.</i></button>
                </td>
                <td>
                    <button style={{ border: "none" }} onClick={() => deleteUserById(items.id)}><i className="fa fa-trash">.</i></button>
                </td>
            </tr>
        )
    })
    return (
        <div>
            <div >
                <button className='btn btn-primary mx-4'><Link className="nav-link" to='/admin/productData'>Product Data</Link> </button>
                <button className='btn btn-primary mx-4'><Link className="nav-link" to="/adminpage/userData">User Data</Link></button>
            </div>
            <h3 className="my-1">Users </h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">SL No</th>
                        <th scope="col">Name</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Phone No</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {userData}
                </tbody>
            </table>
        </div>
    )
}
