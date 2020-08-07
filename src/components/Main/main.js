import React from 'react'
import MainBackground from '../../assests/main.png'
import { Container} from 'react-bootstrap'
import './main.css'

const Main= () =>{
    return(
        <div className="main-container"  style={{ backgroundImage: `url(${MainBackground})` }}>
            <div className="main-text">
            <h1>Season 1</h1>
            <p>
            Enjoy the thrills, feel the passion, experience the love the romance, all packed in this season on Which Bride is Next!
            </p>
            </div>
        </div>
    )
}

export  default Main