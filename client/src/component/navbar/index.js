import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import './navbar.css'

const NavBar = () => {
  const [state, setState] = useState({
    isActive: false,
  })
  useEffect(() => {
    if (window.location.pathname) {
      const isActive = window.location.pathname.split('/')[1]
      setState((prevState) => {
        return {
          ...prevState,
          isActive,
        }
      })
    }
  }, [])
  const handleClick = (active) => {
    setState((prevState) => {
      return {
        ...prevState,
        isActive: active,
      }
    })
  }
  return (
    <>
      <nav>
        <ul>
          <Link to="/user">
            <li
              id="nav-home"
              className={classNames({
                active: state.isActive === '' || state.isActive === 'user',
                statice: !(state.isActive === '' || state.isActive === 'user'),
              })}
              alt="nav-home-button"
              onClick={() => handleClick('user')}
            >
              User
            </li>
          </Link>
          <Link to="/repos">
            <li
              id="nav-content"
              className={classNames({
                active: state.isActive === 'repos',
                statice: !(state.isActive === 'repos'),
              })}
              alt="nav-content-button"
              onClick={() => handleClick('repos')}
            >
              Repos
            </li>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
