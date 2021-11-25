import React from 'react'

import logo from '../images/logo.png'
import logoWebp from '../images/logo.webp'

export default function Header() {
    return (
        <header id="header">
            <div className="wrapper">
                <div id="logo">
                    <a href="#" title="ova template">
                        <picture>
                            <source srcSet={logoWebp} type="image/webp" />
                            <img src={logo} alt="" width="769" height="255" />
                        </picture>
                    </a>
                </div>

                <nav id="nav">
                    <ul>
                        <li><a href="#" title="">Новини</a>
                            <ul>
                                <li><a href="#">Назва підпункта 1 до "Новини"</a></li>
                                <li><a href="#">Назва підпункта 2 до "Новини"</a></li>
                                <li><a href="#">Назва підпункта 3 до "Новини". Дуже довга назва підпункта</a></li>
                            </ul>
                        </li>
                        <li><a href="#" title="">Спецтема</a></li>
                        <li><a href="#" title="">Влада</a></li>
                        <li><a href="#" title="">Відео</a></li>
                        <li><a href="#" title="">Інтерв'ю</a></li>
                        <li><a href="#" title="">Репортажі</a>
                            <ul>
                                <li><a href="#">1 Репортаж</a></li>
                                <li><a href="#">2 Репортаж</a></li>
                                <li><a href="#">3 Репортаж</a></li>
                            </ul>
                        </li>
                    </ul>

                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                </nav>

                <div id="search">
                    <form method="post">
                        <input type="search" placeholder="type word" />
                        <button aria-label="search button">
                            <svg fill="currentColor" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>
                        </button>
                    </form>

                    <div className="search"></div>
                    
                </div>

            </div>
        </header>
    )
}
