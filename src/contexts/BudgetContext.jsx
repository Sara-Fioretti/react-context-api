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

function useBudgetMode (){
    const budget = useContext(BudgetContext)
    return budget
}

export{BudgetProvider,useBudgetMode}