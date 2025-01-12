import { useState } from "react";
import PropTypes from "prop-types";
import s from "./SearchBr.module.css";

const SearchBr = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery(""); // Clear input field after submission
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className={s.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

// PropTypes validation
SearchBr.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBr;
