import React from 'react';
import ButtonImage from '../../Assets/Icons/search-icon.svg';
import './styles.css';


const Search = ({
    type,
    placeholder,
    classInput,
    onChange,
    classButton,
    onClick,
    value
}) => {
    return (
        <div className='search-component'>
            <input
                type={type}
                placeholder={placeholder}
                className={classInput}
                onChange={onChange}
                value={value}
            >
            </input>
            <button className={classButton} onClick={onClick}>
                <img src={ButtonImage} alt='search icon'></img>
            </button>
        </div>
    )
};


export default Search;