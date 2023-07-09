import React from 'react'
import { Link } from 'react-router-dom'

export default function Adminpage(props) {
    return (
        <div>
            <div className='container'>
                <h3>Hello {props.Email}</h3>
                <div >
                    <button type='button' className='btn btn-primary mx-4 mt-4'><Link className="nav-link" to='/admin/productData'>Product Data</Link> </button>
                    <button type='button' className='btn btn-primary mx-4 mt-4'><Link className="nav-link" to="/adminpage/userData">User Data</Link></button>
                </div>
            </div>
        </div >
    )
}
