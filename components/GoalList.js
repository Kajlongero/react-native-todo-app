import { StyleSheet, View, FlatList, Pressable, Text } from 'react-native';
import { useGoalStore } from '../stores/useGoalStore';
import { AddGoal } from '../components/AddGoal';
import { GoalItem } from './GoalItem';

export const GoalList = () => {
  const { goals, goalsFiltered, setModalNewGoalOpen } = useGoalStore();

  const handleOpenModal = () => setModalNewGoalOpen();

  return (
    <View style={styles.goalsContainer}>
      <AddGoal />
      <Pressable 
        style={styles.addNewGoalButtonContainer} 
        onPress={handleOpenModal}
      >
        <Text style={styles.addNewGoalButton}>+</Text>
      </Pressable>
      <Text style={styles.goalListText}>Goal List - Total: {goalsFiltered.length}</Text>
      {
        goals.length < 1 && 
        goalsFiltered.length < 1 && 
        (
          <Text style={styles.noTodos}>There is not todos yet</Text>
        ) 
      }
            {
        goals.length > 0 && 
        goalsFiltered.length < 1 && 
        (
          <Text style={styles.noTodos}>There is not todos by the search keyword</Text>
        ) 
      }
      <FlatList 
        data={goalsFiltered}
        keyExtractor={(e) => e.id}
        style={styles.goalsContainerList}
        renderItem={({ item }) => (
          <GoalItem text={item.text} id={item.id} key={item.id} /> 
        )}
        />
    </View>
  )
}
 
const styles = StyleSheet.create({
  goalsContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#292929'
  },
  addNewGoalButtonContainer: {
    position: 'absolute',
    width: 64,
    height: 64,
    bottom: 20, 
    right: 20,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 99999,
    zIndex: 1,
  },
  addNewGoalButton: {
    width: '100%', 
    height: '100%',
    color: '#fff',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 58,
    marginBottom: 20,
  },
  goalsContainerList: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  goalListText: {
    paddingTop: 16,
    paddingLeft: 12,
    color: '#fff',
    fontSize: 21,
  },
  noTodos: {
    color: '#aaaaaa',
    padding: 12,
    fontSize: 21,
    fontStyle: 'italic',
  },
})