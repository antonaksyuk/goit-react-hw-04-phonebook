import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
import { useState } from 'react';

import style from './PhoneBookForm.module.css'

export default function PhoneBookForm({ contact }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
     
   const onFormSubmit = e => {
        e.preventDefault();
        
        const newItem = { name: name, number: number, id: nanoid(4) };
        contact(newItem);
       setName('');
       setNumber('');
      }

    const onHandleChange = e => {
        switch (e.currentTarget.name) {
            case 'name':
                setName(e.currentTarget.value);
                break;
            case 'number':
                setNumber(e.currentTarget.value);
                break;
            default: return '';
                  }
    }
      
    return (
        <form className={style.inputForm} onSubmit={onFormSubmit}>
            <label className={style.input}> Name
                <br />
                <input
                    type="text"
                    name="name"
                   
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={onHandleChange}
                    value={name}
                />
            </label>
            <label className={style.input}> Number
                <br />
                <input
                    type="tel"
                    name="number"
                    
                    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={onHandleChange}
                    value={number}
                />
            </label>
                
            <button type="submit">Add contact</button>
        </form>
    );
}

    PhoneBookForm.propTypes = {
        contact: propTypes.func.isRequired,
    }