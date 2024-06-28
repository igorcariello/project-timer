import { HeaderContainer } from './styles'
import { Timer, Scroll } from '@phosphor-icons/react'

import logoIgnite from '../../assets/ignite-logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Título">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
