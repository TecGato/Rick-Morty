import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

export default function NavBar(props) {
  return (
    <div className={styles.navbar}>
      <Link to={'/home'}>
        <button>Home</button>
      </Link>
      <Link to={'/favorites'}>
        <button>Mis Favoritos</button>
      </Link>
      <Link to={'/about'}>
        <button>About</button>
      </Link>
      <button onClick={props.logout}>Logout</button>
      <SearchBar onSearch={props.onSearch} />
      <button
        onClick={() => {
          props.onSearch(Math.floor(Math.random() * 826));
        }}
      >
        Aleatorio
      </button>
    </div>
  );
}
