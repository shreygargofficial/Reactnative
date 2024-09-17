import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, ActivityIndicator, Button, Pressable, FlatList } from 'react-native';
import GoalInput from './Components/GoalInput';
import GoalList from './Components/GoalList';

export default function App() {
  const [goal, setGoal] = useState('');
  const [goalList, setList] = useState([]);

  let inputChangeHandler = (value) => {
    setGoal(value)
  }
  let addGoalHandler = () => {
    if (goal && !goalList.includes(goal)) {
      let newList = [...goalList];
      newList.push(goal);
      setList(newList)
      setGoal('')
    }

  }

  let deleteGoalHandler = (myGoalToDelete)=>{
    if(myGoalToDelete){
      setList(currentList=>{
        return currentList.filter(goals=>goals!==myGoalToDelete)
      })
    }
  }


  return (
    <>
    <View style={styles.container}>
      <GoalInput inputChangeHandler={inputChangeHandler} goal={goal} addGoalHandler={addGoalHandler}/>
      <GoalList goalList={goalList} deleteGoalHandler={deleteGoalHandler}/>   

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10
  },

});
