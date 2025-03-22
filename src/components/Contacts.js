import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllContacts, getSingleContact ,deleteContact} from '../redux/actions/contacts.actions'
import AddEditContact from './AddEditContact'

 function Contacts({getAllContacts,contacts,getSingleContact,contact,deleteContact}) {
  // const contacts = [
  //   {name:'John', phone: 9988776655, email:'john@gmail.com'},
  //   {name:'smith', phone:9876543219, email:'smith@gmail.com'},
  //   {name:'kim', phone:9988994433, email:'kim@gmail.com'}
  // ]
  useEffect(()=>{
    getAllContacts()
  },[getAllContacts])
 const  handleDelete =(index)=>{
  const confirm = window.confirm('Are you sure want to Delete?');
  if(confirm){
    deleteContact(index);
  }
 }
  // console.log(contacts, 'This is contacts in the component');
  return (
    <div>
    <div className='container d-flex flex-row justify-content-between mt-4'>
       <h1>All Contacts</h1>
       <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add Contact</button>
    </div>
    <div className='container mt-4'>
      {contacts.length===0 && <p className='text-danger text-center'>No Contacts Found!</p>}
    {contacts.length>0&& <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Sl.No</th>
      <th scope="col">Name</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {contacts.map((contact,index)=>(
     <tr key={index}>
     <th>{index+1}</th>
     <td>{contact.name}</td>
     <td>{contact.phone}</td>                                                                      
     <td>{contact.email}</td>
     <td><button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>getSingleContact(index)}>Edit</button>&nbsp;
     <button className='btn btn-danger' onClick={()=>handleDelete(index)}>Delete</button></td>
   </tr>
  ))}
   
  </tbody>
</table>}
<AddEditContact editContactsData={contact}/>
    </div>
    </div>
  )
}
const mapStateToProps = (state)=>{
  // console.log(state, 'This is state in mapStateToProps');
  return{
    contacts:state.contacts,
    contact:state.contact
  };
};
const mapDispatchToProps = (dispatch) => {
  return{
    getAllContacts : ()=>dispatch(getAllContacts()),
    getSingleContact:(index)=>dispatch(getSingleContact(index)),
    deleteContact:(index)=>dispatch(deleteContact(index))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contacts);




