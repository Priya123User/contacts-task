import React, { useEffect, useRef, useState } from 'react'
import { addContact,editContact } from '../redux/actions/contacts.actions';
import { connect } from 'react-redux'

function AddEditContact({ addContact,editContactsData,editContact }) {
    const [contact, setContact] = useState({
        name: "",
        phone: "",
        email: ""
    })
    useEffect(()=>{
setContact(editContactsData)
    },[editContactsData])
    const handleChange = (name, value) => {
        const oldcontact = { ...contact }
        oldcontact[name] = value;
        setContact(oldcontact)
    }
    const handleSubmit = () => {
        if (contact.id!==null){
             editContact(contact,contact.id)
        }else{
        addContact(contact)
        }
        setContact(
            {
                name: "",
                phone: "",
                email: ""
            }
        )
        closeRef.current.click()
    }
    const closeRef =useRef();
    return (
        <div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Add/Edit Contact</h1>
                            <button type="button" ref={closeRef} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Your Name" id="exampleInputName" value={contact.name} onChange={(e) => handleChange('name', e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" placeholder="Enter Your Phone Number" id="exampleInputPassword1" value={contact.phone} onChange={(e) => handleChange('phone', e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" placeholder="Enter Your Email" id="exampleInputEmail1" aria-describedby="emailHelp" value={contact.email} onChange={(e) => handleChange('email', e.target.value)} />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" onClick={() => handleSubmit()}>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state, 'This is state in mapStateToProps');
    return {
        contacts: state.contacts
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addContact: (contact) => dispatch(addContact(contact)),
        editContact: (contact,id) => dispatch(editContact(contact,id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEditContact);