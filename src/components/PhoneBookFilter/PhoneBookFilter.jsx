import propTypes from 'prop-types'

import style from '../PhoneBookForm/PhoneBookForm.module.css'

export default function PhoneBookFilter({ filter }){
    
        return (
            <>
                <label className={style.inputForm}> Find contacts by name
                    <br />
                    <input className={style.input} type="text" name='filter' onChange={filter}/>
                </label>
            </>
 )       
    }


PhoneBookFilter.propTypes = {
    filter: propTypes.func.isRequired,
}

