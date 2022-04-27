import React, { useState } from 'react';
import { 
  Button, 
  View, 
  StyleSheet, 
  FlatList
} from 'react-native';
import { StatusBar } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  const startAddGoalhandler = () =>{
    setModalIsVisible(true)
  }

  const endAddGoalHandler = () =>{
    setModalIsVisible(false)
  }

  
  const addGoalHandler = (enteredText) =>{
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals,{text:enteredText, id:Math.random().toString()}])
    endAddGoalHandler();
  }
  const deleteGoalHandler = (id) =>{
    setCourseGoals(currentCourseGoals=>{return currentCourseGoals.filter((goal)=>goal.id!==id)})
  }
  return (
    <>
      <StatusBar backgroundColor="#5e0acc" />
      <View style={styles.appContainer}>
        <Button title='Add new goal' 
          color='#5e0acc'
          onPress={startAddGoalhandler}/>
        <GoalInput addGoalHandler = { addGoalHandler } onCancel={endAddGoalHandler} visiable = {modalIsVisible}/>
        <View style={styles.goalContainer}>
          {/* <ScrollView>
            {courseGoals.map((goal)=>(
              <View key={goal} style={styles.goalItem}>
                <Text style={styles.goalText}>{goal}</Text>
              </View>
            ))}
          </ScrollView> */}
          <FlatList 
          data={courseGoals}
          renderItem={(itemData)=>{
            return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id}/>
          }}
          keyExtractor={(item, index)=>{return(item.id)}}
          />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal:16,
    backgroundColor: '#1e085a'
  },
  goalContainer:{
    flex: 5,
  },
})