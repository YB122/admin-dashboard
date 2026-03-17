import { createContext } from "react";

export let CategoryContext = createContext();

export default function CategoryProvider({children}){
    return(
        <CategoryContext.Provider value={{}}>
            {children}
        </CategoryContext.Provider>
    )
}