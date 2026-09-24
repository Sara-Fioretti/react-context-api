import { createContext, useContext, useState } from "react";
const BudgetContext = createContext()

function BudgetProvider({children}) {
    const [budgetMode, setBudgetMode] = useState(false)
    const [maxPrice, setMaxPrice] = useState("")
    return (
        <BudgetContext.Provider
        value={{
            budgetMode, setBudgetMode, maxPrice, setMaxPrice
        }}>{children}
        </BudgetContext.Provider>

    )
}

function useBudgetMode (){
    const budget = useContext(BudgetContext)
    return budget
}

export{BudgetProvider,useBudgetMode}