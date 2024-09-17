import { View, StyleSheet, ScrollView, Text, Pressable } from 'react-native'
function GoalList({ goalList, deleteGoalHandler }) {
    return (
        <View style={styles.goalsList}>
            <ScrollView>
                {goalList.length > 0 &&
                    goalList.map((currentGoal, key) => {
                        return <Pressable
                            android_ripple={{ color: '#dddddd' }}
                            style={({pressed})=>pressed ? styles.pressable && styles.pressedItem : styles.pressable}
                            key={key}
                            onPress={deleteGoalHandler.bind(this, currentGoal)}>
                            <Text style={styles.goalList} >
                                {currentGoal}
                            </Text>
                        </Pressable>
                    })
                }

            </ScrollView>
        </View>
    );
}

export default GoalList;
const styles = StyleSheet.create({

    goalsList: {
        paddingTop: 10,
        flex: 8,
    },
    goalList: {
        marginTop: 1,
        textTransform: 'capitalize',
        
        padding: 10,
        color: 'white',
        borderRadius: 5,
    },
    pressedItem:{
        opacity:0.5,
    },
    pressable: {
        marginTop:6,
        backgroundColor: 'purple',
        borderRadius: 5, // Consistent with goalList
    },

});