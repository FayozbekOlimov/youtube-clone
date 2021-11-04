import React, { useState } from 'react';

const Search = ({ onSubmit }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event) => setSearchTerm(event.target.value);

    const keyPress = (event) => {
        if (event.key === "Enter") {
            onSubmit(searchTerm);
        }
    }

    return (
        <div className="header">
            <a href="/" className="brand">
                <img src="./images/logo.png" alt="logoBrand" />
            </a>
            <div className="form">
                <input
                    type="search"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleChange}
                    onKeyPress={keyPress}
                />
            </div>
            <div className="icons">
                <img src="./images/functions.png" alt="functions" className="functions" />
                <img src="./images/avatar.png" alt="Avatar" className="profile" />
            </div>
        </div>
    );
}

export default Search;
