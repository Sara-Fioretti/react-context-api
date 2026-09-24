import { NavLink } from "react-router-dom";
import { BudgetProvider, useBudgetMode } from "../contexts/BudgetContext";
import { useContext } from "react";
import { useState } from "react";

function Header() {
    const {budgetMode, setBudgetMode} = useBudgetMode()
    function handleClick (){
        setBudgetMode(!budgetMode)
    }
    return (
        <nav className="navbar bg-primary">
            <div className="container justify-content-between ">
                <NavLink to='/' className="nav-link text-white">Home Page</NavLink>
                <NavLink to='/chisiamo'className="nav-link text-white"> Chi Siamo</NavLink>
                <NavLink to='/products' className="nav-link text-white">Prodotti</NavLink>
                <NavLink to='/products' className="nav-link text-white">
                <button onClick={handleClick} className="btn btn-light" type="submit">{budgetMode ? "Disattiva" : "Attiva"}  Modalità Budget</button>
                </NavLink>
            </div>
        </nav>
    )
}

export default Header;