import { useContext, useMemo } from "react";
import { View, Text } from "react-native";
import { mealContext } from "../context/FavoriteMealProvider";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

function Favorite() {

    const ctx = useContext(mealContext);
    let mealsArr = useMemo(()=>{
        return MEALS.filter(myMeal=>{
            return ctx.ids.includes(myMeal.id);
        })
    },[ctx.ids])
    MEALS
    return ( <MealList mealsArr={mealsArr}/>);
}

export default Favorite;