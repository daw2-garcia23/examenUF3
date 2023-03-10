import './scss/estilo.scss'
import * as bootstrap from 'bootstrap'
import { header } from './componentes/header'
import { home } from './vistas/home'
import { pedidos } from './componentes/pedidos'
import { tabla } from './componentes/tablaPedidos'
tabla


    document.querySelector('header').innerHTML = header.template
    document.querySelector('main').innerHTML = home.template
    document.querySelector('pedidos').innerHTML = pedidos.template
    document.querySelector('tabla').innerHTML = tabla.template