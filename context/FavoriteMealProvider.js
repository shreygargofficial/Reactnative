import React, { useState } from "react";

export const mealContext = React.createContext({
    ids :[],
    addFavorite:()=>{},
    removeFavorite: ()=>{}
})
function FavoriteMealProvider({children}) {
    const [ids,setId] = useState([])
    let addFavorite = (id)=>{
        setId(prev=>{
            if(!prev.includes(id)){
                    return [...prev,id]
            }
        })
    }
    let removeFavorite = (id)=>{
        setId(prev=>{
            if(prev.includes(id)){
                    return prev.filter(myId=>myId!=id)
            }
        })
    }
    return ( 
        <mealContext.Provider value={{
            ids,
            addFavorite,
            removeFavorite
        }}>
            {children}
        </mealContext.Provider>
     );
}

export default FavoriteMealProvider;