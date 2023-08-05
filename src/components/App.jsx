import { useState, useEffect } from 'react';
import { isEqual } from 'lodash';
import style from './/PhoneBookForm/PhoneBookForm.module.css'


import PhoneBookForm from './PhoneBookForm';
import PhoneBookList from './PhoneBookList';
import PhoneBookItem from './PhoneBookItem';
import PhoneBookFilter from './PhoneBookFilter';

// export class App extends Component {
//     state = {
//         contacts: [
//             // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//             // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//             // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//             // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//         ],
//         filter: '',
//     };
    
//     addContact = contact => {
//         const data = this.state.contacts.some(item => isEqual(item.name.toLowerCase(), contact.name.toLowerCase()))
//         data ? alert(`${contact.name} is already in the contact list`) :
//         this.setState(prevState => {
//             return { contacts: [...prevState.contacts, contact] }
//         })
//     }

//     deleteContact = id => {
//         this.setState(prevState => {
//             return { contacts: prevState.contacts.filter(item => item.id !== id) }       })
// }

//     onHandleChange = e => {
//         const { name, value } = e.currentTarget;
//         this.setState({ [name]: value });
//     }

//     filterContacts = () => {
//         const { contacts, filter } = this.state;
//         const filteredItems = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
//         return filteredItems
//     }

//   componentDidMount() {
//         const localStorageData = localStorage.getItem('contacts');
//         const contacts = JSON.parse(localStorageData) ?? [];

//       this.setState({ contacts });
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.contacts.length !== this.state.contacts.length) {
//             const localStorageData = JSON.stringify(this.state.contacts);
//             localStorage.setItem('contacts', localStorageData);
//         }
//     }

//     render() {
export default function App() {
    const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contacts')) ?? []);
    const [filter, setFilter] = useState('');
    
const addContact = contact => {
        const data = contacts.some(item => isEqual(item.name.toLowerCase(), contact.name.toLowerCase()))
        data ? alert(`${contact.name} is already in the contact list`) :
        setContacts([...contacts, contact] 
        )
    }

    const  deleteContact = id => {
        setContacts(contacts.filter(item => item.id !== id))
}

    const    onHandleChange = e => {
        const { value } = e.currentTarget;
        setFilter( value );
    }
    
const filterContacts = () => {
        const filteredItems = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
        return filteredItems
    }

    useEffect(() => {
            window.localStorage.setItem('contacts', JSON.stringify(contacts));
        }, [contacts]); 

        return (
            <div className={style.container}>
                <h1>Phonebook</h1>
                < PhoneBookForm contact={addContact} />
                <h2>Contacts</h2>
                <PhoneBookFilter filter={onHandleChange} />
                < PhoneBookList>
                    <PhoneBookItem filter={filterContacts} delete={deleteContact} />
                </PhoneBookList>
            </div>
        );
    };  
