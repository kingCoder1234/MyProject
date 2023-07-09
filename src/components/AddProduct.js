import React, { useState } from 'react';
import { addProductList } from '../utils';
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        url: '',
        name: '',
        price: '',
        seller: '',
        category: '',
        description: '',
        productQuantity: ''
    });

    // Form input change handler

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        addProductList(formData);
        setFormData({
            url: '',
            name: '',
            price: '',
            seller: '',
            category: '',
            description: '',
            productQuantity: ''
        })
        navigate("/shopping");
    };


    return (
        <div className='py-4' style={{ width: "50%", margin: "auto" }}>
            <h2>Add Product</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Name</label>
                    <input
                        type="text"
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder=" name" />
                </div>

                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">category</label>
                    <input
                        type="text"
                        name='category'
                        value={formData.category}
                        onChange={handleChange}
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder=" category" />
                </div>

                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">seller</label>
                    <input
                        type="text"
                        name='seller'
                        value={formData.seller}
                        onChange={handleChange}
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder=" seller" />
                </div>

                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">price</label>
                    <input
                        type="number"
                        name='price'
                        value={formData.price}
                        onChange={handleChange}
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder=" price" />
                </div>

                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">ProductQuantity</label>
                    <input
                        type="number"
                        name='productQuantity'
                        value={formData.productQuantity}
                        onChange={handleChange}
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder=" productQuantity" />
                </div>

                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">image url</label>
                    <input
                        type="text"
                        name='url'
                        value={formData.url}
                        onChange={handleChange}
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder=" url" />
                </div>

                <div className="form-group py-2">
                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                    <textarea
                        value={formData.description}
                        onChange={handleChange}
                        name="description"
                        placeholder="Product Description"
                        className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    );
}
