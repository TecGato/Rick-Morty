import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Nav/Nav.jsx';
import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/favorites';

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = 'francoelvis@henry.com';
  const password = 'asd1234';

  const navigate = useNavigate();
  const location = useLocation();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    } else {
      window.alert('Usuario o password incorrecto');
    }
  }

  function logout() {
    setAccess(false);
  }

  function onSearch(character) {
    let bandera = false;
    characters.forEach((personaje) => {
      if (personaje.id == character) {
        bandera = true;
      }
    });
    if (bandera) {
      window.alert('No se admiten Personajes Repetidos');
    } else {
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('No hay personajes con ese ID');
          }
        });
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  function onClose(id) {
    setCharacters((personajes) =>
      personajes.filter((individuo) => individuo.id !== id)
    );
  }

  return (
    <div className='body'>
      <div className='App' style={{ padding: '25px' }}>
        {location.pathname === '/' ? (
          <Form login={login} />
        ) : (
          <NavBar onSearch={onSearch} logout={logout} />
        )}
        <hr />
        <Routes>
          <Route
            path='/home'
            element={<Cards characters={characters} onClose={onClose} />}
          ></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='/favorites' element={<Favorites></Favorites>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
