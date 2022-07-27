import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'

function MainHeader() {
  return (
    <header className={classes.header}>
        <h1 className={classes.logo}>Great quotes</h1>
        <nav className={classes.nav}>
            <ul>
                <li><NavLink to='/quotes' activeClassName={classes.active}>All Quotes</NavLink></li>
                <li><NavLink to='/add-quote' activeClassName={classes.active}>Add a Quote</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default MainHeader