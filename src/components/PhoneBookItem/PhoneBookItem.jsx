import { nanoid } from 'nanoid';
import propTypes from 'prop-types'

import style from './PhoneBookListItem.module.css'

export default function PhoneBookItem({...args}) {
    return (
        <>
            {args.filter().map(contact => {
                return (
                    <li className={style.item} key={nanoid()}>{contact.name}: {contact.number}
                        <button className={style.button} type='button' onClick={() => args.delete(contact.id)}>Delete Contact</button>
                    </li>
                )
            })}
        </>
                  );
}

    
PhoneBookItem.propTypes = {
    filter: propTypes.func.isRequired,
    delete: propTypes.func.isRequired,
}