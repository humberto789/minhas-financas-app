import React from 'react'

import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from '../views/login';
import CadastroUsuario from '../views/cadastro-usuario';
import Home from '../views/home';

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro-usuarios' element={<CadastroUsuario />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;