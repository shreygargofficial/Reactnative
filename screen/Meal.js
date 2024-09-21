import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

function Meal({ route }) {
    let { id } = route.params;
    let mealsArr = MEALS.filter(meal => meal?.categoryIds.includes(id));
    return (
       <MealList mealsArr={mealsArr}/>
    );
}

export default Meal;