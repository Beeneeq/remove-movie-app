import { createRouter } from '../core/heropy'
import Home from './Home'
import Movie from './Movie.js'
import About from './About.js'
import NotFound from './NotFound.js'

export default createRouter([
    { path: '#/', component: Home },
    { path: '#/movie', component: Movie},
    { path: '#/about', component: About},
    { path: '.{0,}', component: NotFound}    
])