import { createStore } from 'redux'; 
import { contactsReducer } from './reducers/contactsReducer';



export const store =createStore(contactsReducer);


// import { createStore } from 'redux';
// import { contactsReducer } from './reducers/contactsReducer';

// export const store = createStore({
//   reducer: {
//     Contacts: contactsReducer // 'Contacts' should match the state key you're using in mapStateToProps
//   }
// });

