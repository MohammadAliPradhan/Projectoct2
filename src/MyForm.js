
import React from 'react';
import { Outlet } from 'react-router-dom';


class MyForm extends React.Component {
  render() {

    return (
       <div>
        <Outlet />
        {/* Paste the Google Form embed code here */}
        <iframe
          title="My Google Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSf9i4zcGl68-PkbUjwf5SKqwg3JV9ey2CMdwUBtHk27oAAocQ/viewform?embedded=true"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
    );
  }
}

export default MyForm;

