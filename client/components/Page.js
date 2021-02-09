import React from 'react';
import ModalForm from './ModalForm.js';
import LogIn from './LogIn.js';
import Home from './Home.js'

const Page = ({ show, closeModal, pageChange, page, urlChange }) => {
  if (page === 'signup') {
    return <ModalForm show={show} closeModal={closeModal} pageChange={pageChange} /* urlChange={urlChange} */ />
  } else if (page === 'login') {
    return <LogIn show={show} pageChange={pageChange} closeModal={closeModal}/>
  } else if (page === 'home') {
    return <Home />
  }
};

export default Page;