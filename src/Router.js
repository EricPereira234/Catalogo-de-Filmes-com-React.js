import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from './pages/Home';
import Nav from './components/navBar';
import PlyList from './pages/playlist';
import Des from './pages/Des';

export default function Rota() {
    return (
        <Router>
            <Nav/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path = '/playlist' element = {<PlyList/>}/>
                <Route path='filme/:id' element= {<Des/>} />
                <Route path='*' element={<h1>Not Fond !</h1>} />
            </Routes>
        </Router>
    );
}