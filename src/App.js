import React from 'react';
import './App.css';
import { Routes, Route, Link, useParams, Outlet } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Link to={`/`}>Home</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<about />} />
        <Route path="/Koder/:name" element={<Koder />} />
        <Route index path="Modulos " element={<h1>Hola</h1>} />
        <Route path="Retos" element={<h1>Retos</h1>}>
        </Route>
      </Routes>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}
//vamos a crear una ruta que nos muetre a el koder que le pasemos
const Koder = () => {
  const { name } = useParams()
  return (
    <>
      <h1>Koder</h1>
      <h2>{name}</h2>
      <img width="200px" src="https://2mingenieria.com.ve/wp-content/uploads/2018/10/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg" alt="Koder" />
      <Link to='Modulos'>Modulos</Link>
      <Link to='Retos'>Retos</Link>
      <Outlet />
    </>
  )
}
const Home = () => {

  const Koders = ['Martha', 'Miguel', 'Arnold']

  return (
    <>
      <h1>Selecciona un koder</h1>
      <ul>
        {Koders.map((koder) => {
          return (
            <li key={koder}>
              <Link to={`/Koder/${koder}`}>{koder}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}


const about = () => {
  <>
    <h1>About</h1>
  </>
}

export default App;

