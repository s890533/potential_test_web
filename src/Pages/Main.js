import React from 'react'
import './Main.css'
import NavBar from '../components/NavBar'
import Timer from '../components/Timer'
import Counter from '../components/Counter'
import Multiplication from '../components/Multiplication'

function Main() {
  return (
    <div>
        
        <div className="containers">
        <NavBar />
        <div className="card-body">
            <div className="unit-control">
            <Timer/>
            <span className="exchange-icon fa-fw fa-stack">
                <i className="far fa-circle fa-stack-2x" ></i>
                <i className="fas fa-exchange-alt fa-stack-1x" ></i>
            </span>
            <Counter/>
            </div>
            <div className="component-control">
            <Multiplication/>
            </div>
            
        </div>
        <div className="card-footer">FAST</div>
        </div>

    </div>
    
  )
}

export default Main
