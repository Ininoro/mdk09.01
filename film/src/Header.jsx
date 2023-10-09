import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="left">
            <h1>Кино</h1>
            <button className="yellow" >Онлайн</button>
            </div>
            <div className="right">
                <button className='go_button'>Войти</button>
                <button className="yellow">Создать аккаунт</button>
            </div>
        </div>
       
    </header>
  )
}
