import React from 'react';
import '../css/FormPage.css';

const FormPage = () => {
  return (
    <div className="container">
      <h1 className="sticky-top">Contact Form</h1>
      <div className="content">
        <form>
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label text-start">
              Name:
            </label>
            <div className="col-sm-8">
              <input type="text" name="name" className="form-control" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label text-start">
              Email:
            </label>
            <div className="col-sm-8">
              <input type="email" name="email" className="form-control" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label text-start">
              Message:
            </label>
            <div className="col-sm-8">
              <textarea name="message" className="form-control" rows="4"></textarea>
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-success">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormPage;