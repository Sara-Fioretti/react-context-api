import { createContext, useContext, useState } from "react";
const BudgetContext = createContext()

function BudgetProvider({children}) {
    const [budgetMode, setBudgetMode] = useState(false)
    return (
        <BudgetContext.Provider
        value={{
            budgetMode, setBudgetMode
        }}>{children}
        </BudgetContext.Provider>

    )
}

function handleBudgetMode (){
    const budget = useContext(BudgetContex)
    return budget
}

export{BudgetProvider, useContext}