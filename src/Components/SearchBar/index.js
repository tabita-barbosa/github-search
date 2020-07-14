import React from 'react';
import Search from '../Search';
import './styles.css';

const SearchBar = ({
    type,
    classInput,
    classButton,
    onClick,
    placeholder,
    onChange,
    value
}) => {
    return (
    <div>
    <Search
        type={type}
        classInput={classInput}
        classButton={classButton}
        onChange={onChange}
        onClick={onClick}
        placeholder={placeholder}
        value={value}
    />
    </div>
    );
};


export default SearchBar;