import React, { useState } from 'react';

export default function ContactForm() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userContact, setUserContact] = useState('');

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleProductDescriptionChange = (e) => {
    setProductDescription(e.target.value);
  };

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleUserContactChange = (e) => {
    setUserContact(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Name:', productName);
    console.log('Product Price:', productPrice);
    console.log('Product Description:', productDescription);
    console.log('User Email:', userEmail);
    console.log('User Contact:', userContact);

    // You can send this data to a server or perform other actions here.
  };

  return (
    <div className="container mt-4  jstcenter">
      <h1 className="text-center">Contact us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Your Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            value={productName}
            onChange={handleProductNameChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Type (shopping, blog, etc.):
          </label>
          <input
            type="text"
            className="form-control"
            id="productPrice"
            value={productPrice}
            onChange={handleProductPriceChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">
            Explain how you want your website to look like:
          </label>
          <textarea
            className="form-control"
            id="productDescription"
            value={productDescription}
            onChange={handleProductDescriptionChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userEmail" className="form-label">
            Your Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="userEmail"
            value={userEmail}
            onChange={handleUserEmailChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userContact" className="form-label">
            Your Contact Number:
          </label>
          <input
            type="tel"
            className="form-control"
            id="userContact"
            value={userContact}
            onChange={handleUserContactChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <p className="text-center mt-3">
        Our contact email is{' '}
        <a href="mailto:mdsali914@gmail.com">mdsali914@gmail.com</a>
      </p>
    </div>
  );
}
