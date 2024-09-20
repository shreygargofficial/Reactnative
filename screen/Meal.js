import { SafeAreaView, Text, StyleSheet, Image, View, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealTile from "../components/MealTile";

function Meal({ route,navigation }) {
    let { id } = route.params;
    let mealsArr = MEALS.filter(meal => meal?.categoryIds.includes(id));
    return (
        <SafeAreaView style={styles.root}>
            <FlatList
                data={mealsArr}
                keyExtractor={({ id }) => id}
                contentContainerStyle={{
                    // padding: 10,
                }}
                renderItem={({ item: {
                    id,
                    title,
                    affordability,
                    complexity,
                    imageUrl,
                    duration,
                } }) => <MealTile
                        title={title}
                        affordability={affordability}
                        complexity={complexity}
                        imageUrl={imageUrl}
                        duration={duration} 
                        id={id}/>}
                alwaysBounceVertical={false} />
        </SafeAreaView>
    );
}

export default Meal;

let styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'brown'
    }
})