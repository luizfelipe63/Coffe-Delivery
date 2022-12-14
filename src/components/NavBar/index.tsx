import {NavLink} from 'react-router-dom'

import {ShoppingCart, MapPin} from 'phosphor-react'
import Logo from '../../assets/Logo-coffe.svg'
import { Actions, Card, NavContainer,Location } from './styles'


export function NavBar(){
  return (
    <NavContainer>
      <NavLink to={'/'}>
        <img src={Logo} alt="" />
      </NavLink>
      <Actions>
      <Location>
        <MapPin weight='fill' size={22}/>
        Luziânia, GO
      </Location>
      <NavLink to={'/checkout'} title='carrinho'>
        <Card>
          <ShoppingCart weight='fill' size={22}/>
          <span>3</span>
        </Card>
      </NavLink>
      </Actions>
    </NavContainer>
  )
}