import { Link } from 'react-router-dom'
import React from 'react'
import { fetchProductList, deleteProductById, updateCartItem } from '../../utils'

export default function productData() {
    const product = fetchProductList()
    const myproduct = product.map((items, index) => {
        return (
            <tr key={index}>
                <td scope="row">{items.id}</td>
                <td scope="row">{items.name}</td>
                <td scope="row">{items.price}</td>
                <td scope="row">{items.seller}</td>
                <td scope="row">{items.category}</td>
                <td scope="row">{items.url.slice(0, 15)}</td>
                <td scope="row">{items.description.slice(0, 25) + "..."}</td>
                <td>
                    <button style={{ border: "none" }} ><i className="fa fa-edit">.</i></button>
                </td>
                <td>
                    <button style={{ border: "none" }} onClick={() => deleteProductById(items.id)}><i className="fa fa-trash">.</i></button>
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
            <h3 className="my-1">Products </h3>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Seller</th>
                        <th scope="col">Category</th>
                        <th scope="col">Img url</th>
                        <th scope="col">Description</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {myproduct}
                </tbody>
            </table>
            <button className="btn btn-primary my-3">
                <Link className="text-light" style={{ textDecoration: "none" }} to="/admin/addproduct">Add Product</Link>
            </button>


        </div>
    )
}
