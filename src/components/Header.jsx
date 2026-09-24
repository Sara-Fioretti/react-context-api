import { NavLink } from "react-router-dom";
import { BudgetProvider, useBudgetMode } from "../contexts/BudgetContext";
import { useContext } from "react";
import { useState } from "react";

function Header() {
    const {maxPrice, setMaxPrice} = useBudgetMode()
   
    
    function handleChange(e){
       setMaxPrice(Number(e.target.value))
    }

    function handleSubmit (e){
        e.preventDefault()
    }

    return (
        <nav className="navbar bg-primary">
            <div className="container justify-content-between ">
                <NavLink to='/' className="nav-link text-white">Home Page</NavLink>
                <NavLink to='/chisiamo' className="nav-link text-white"> Chi Siamo</NavLink>
                <NavLink to='/products' className="nav-link text-white">Prodotti</NavLink>
              
                <form onSubmit={handleSubmit} className="form-inline">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" >Prezzo massimo</span>
                        </div>
                        <input onChange ={handleChange} value={maxPrice || ''} type="number" className="form-control" placeholder="Inserire Prezzo" />
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default Header;