const initialContacts = {
  contacts: [
    { name: 'John', phone: 9988776655, email: 'john@gmail.com' },
    { name: 'Smith', phone: 9876543219, email: 'smith@gmail.com' },
    { name: 'Kim', phone: 9988994433, email: 'kim@gmail.com' }
  ],
  contact:{},
};


export const contactsReducer = (state=initialContacts,action)=>{
      switch(action.type){
        case 'GET_ALL_CONTACTS':
          return{...state};
        case 'ADD_CONTACT':{
          const contacts = [...state.contacts];
          contacts.push(action.payload)
          return{...state,contacts};
        }
        case 'EDIT_CONTACT':{
          const contacts = [...state.contacts];
          contacts[action.id]=action.payload
          return{...state,contacts};
        }
        case 'Delete_CONTACT':{
          const contacts = [...state.contacts];
          contacts.splice(action.id,1);
          return{...state,contacts};
        }
        case 'GET_SINGLE_CONTACT':
          return{...state,contact:{...state.contacts[action.index], id:action.index}};
        default :
          return state  ;
         
         }

};




  