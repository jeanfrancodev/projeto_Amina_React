import { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '../paginas/login/Login'
import CadastroUsuario from '../paginas/cadastroUsuario/CadastroUsuario'
import Inicio from '../paginas/inicio/Inicio'
import Sobre from '../paginas/sobre/Sobre'
import Feed from '../paginas/feed/Feed'
import { UsuarioContext } from '../context/UsuarioContext'
import ListaPostagem from '../components/postagens/listaPostagem/ListaPostagem'
import ListaGrupo from '../components/grupos/listaGrupo/ListaGrupo'
import CadastroPost from '../components/postagens/cadastroPost/CadastroPost'
import CadastroGrupo from '../components/grupos/cadastroGrupo/CadastroGrupo'
import DeletarGrupo from '../components/grupos/deletarGrupo/DeletarGrupo'
import DeletarPost from '../components/postagens/deletarPost/DeletarPost'

export function AppRoutes() {
  // const { usuario } = useContext(UsuarioContext)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/listaposts" element={<ListaPostagem />} />
        <Route path="/listagrupos" element={<ListaGrupo />} />

        <Route path="/formularioPostagem" element={<CadastroPost />} />
        <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
        <Route path="/deletarPostagem/:id" element={<DeletarPost />}/>

        <Route path="/formularioGrupo" element={<CadastroGrupo />} />
        <Route path="/formularioGrupo/:id" element={<CadastroGrupo />} />
        <Route path="/deletarGrupo/:id" element={<DeletarGrupo />}/>
      </Routes>
    </Router>
  )
}
