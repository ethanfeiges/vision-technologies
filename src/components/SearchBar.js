import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.css'; // Import the CSS Module
import data from "../AllProducts.js";

// Base path for routes
const BASE_PATH = '/';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredData = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    if (filteredData.length > 0) {
      navigate(`${BASE_PATH}${filteredData[0].route}`);
    }
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowSuggestions(false);
      setSearch("");
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Function to remove duplicates
  const uniqueItems = (items) => {
    const uniqueRoutes = new Set();
    return items.filter(item => {
      if (uniqueRoutes.has(item.route)) {
        return false;
      } else {
        uniqueRoutes.add(item.route);
        return true;
      }
    });
  };

  // Filter and remove duplicates
  const filteredData = uniqueItems(data.filter(item => item.name.toLowerCase().includes(search.toLowerCase())));

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    setShowSuggestions(e.target.value !== '');
  };

  return (
    <div className={styles.searchBarContainer} ref={containerRef}>
      <form onSubmit={handleSubmit}>
        <div className={`${styles.inputGroup} my-3`}>
          <input
            type="text"
            value={search}
            onChange={handleInputChange}
            placeholder="Search Products"
            className={styles.searchInput}
          />
        </div>
      </form>
      {showSuggestions && search && filteredData.length > 0 && (
        <table className={styles.dataTable}>
          <tbody>
            {filteredData.map(item => (
              <tr key={item.route}>
                <td>
                  <a href={`${BASE_PATH}${item.route}`}>
                    {item.name}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchBar;
