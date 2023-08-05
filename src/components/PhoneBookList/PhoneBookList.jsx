import propType from 'prop-types'

import style from './PhoneBookList.module.css'

export default function PhoneBookList ({children}) {
        
        return (
            <ul className={style.list}>{ children }</ul>
        )
    }


PhoneBookList.propType = {
    children: propType.node,
}