import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import MealTile from "./MealTile";
function MealList({mealsArr}) {
    return (
        <SafeAreaView style={styles.root}>
            <FlatList
                data={mealsArr}
                keyExtractor={({ id }) => id}
                contentContainerStyle={{
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
                        id={id} />}
                alwaysBounceVertical={false} />
        </SafeAreaView>);
}

export default MealList;

let styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'brown'
    }
})