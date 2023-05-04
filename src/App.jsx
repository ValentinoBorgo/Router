import { useState } from 'react'
import './App.css'
import { Route, Routes, Link, useParams, Outlet, NavLink as NavLinkRouter, Navigate, useNavigate } from 'react-router-dom'
// import { useAuth } from './useAuth.jsx';

const Home = () => <h3>Home</h3>

const  BuscarPagina = () => {
  
  const hamburguesas =  [
    'Doble chesse',
    'Tiple que',
    'Mexican',
    'Blue Chesse'
  ];

  return(
    <div>
      <h3>Hamburguesas</h3> 
      <ul>
        {hamburguesas.map(burga =>(
        <li key={burga}><Link to={`/hamburguesas/${burga}`}>{burga}</Link></li>
      ))}
      </ul>
    </div>
  )
}


const HamburguesaIndex = () =>{
  return(
    <p>Index Route de hamburugesas</p>
  )
}


const HamburguesaDetalles = () =>{
  
  const {nombre} = useParams();

  return(
    <h1>Hamburguesa detalles de {nombre}</h1>
  )

}

const Hamburguesa = () => {
  
  // Este hook obtine el el nombre de la key de la ruta del Router path = '/hamburguesas/:nombre'.
  const {nombre} = useParams();
  
  return(
    <div>
      <h1>Detalles de {nombre}</h1>
      <Link to='detalles'>Ir a los detalles</Link>  
      <Outlet />
    </div>
  )
}

const NavLink = ({to, children, ...props }) =>{
  return (
    <NavLinkRouter
    {...props}
    className = {({isActive}) =>{
      return isActive ? 'isActive' : undefined;
    }}
    to={to}>
      {children}
    </NavLinkRouter>
  )
}


// const Login = () =>{
//   const {login} = useAuth();

//   const navigate = useNavigate(); 
//   const handleClick = () =>{
//     login()
//     navigate('/buscar-pagina')
//   }

//   return(
//     <button onClick={handleClick}>Login</button>
//   )
// }

// const RutaProtegida = ({children}) =>{

//   const {estaAutenticado} = useAuth();

//   if(!estaAutenticado){
//     return(
//       <Navigate to='/login' />
//     )
//   }

//   return children
// }

function App() {

  return (
    <div className='App'>
      <header>
        <h1>Valentino Borgo</h1>
        <nav>
          <ul>
            {/* Nav link si esta activado devuelve una clase active */}
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/buscar-pagina">Buscar pagina</NavLink></li>
          </ul>
        </nav>
      </header>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/buscar-pagina' element={<BuscarPagina />} />
      <Route path='/hamburguesas/:nombre' element={<Hamburguesa/>}>
        <Route index  element={<HamburguesaIndex/>}/>
        <Route path='detalles' element={<HamburguesaDetalles/>}/>
      </Route>
      </Routes>
    </div>
  )
}

export default App
