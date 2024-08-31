import { useState, createContext } from "react";

export const DLContext = createContext();

export const DLProvider = ({children}) =>{
    const [toggle, setToggle] = useState(false);

    const handleToggle = () =>{
        setToggle(!toggle);
    }
    const toggleData ={
        toggle,
        handleToggle
    }

    return(
        <>
            <DLContext.Provider value={toggleData}>
                {children}
            </DLContext.Provider>
        </>
    )
}