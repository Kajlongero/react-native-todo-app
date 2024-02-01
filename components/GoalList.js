import { StyleSheet, View, FlatList, Pressable, Text } from 'react-native';
import { useGoalStore } from '../stores/useGoalStore';
import { AddGoal } from '../components/AddGoal';

export const GoalList = () => {
  const { goalsFiltered, setModalNewGoalOpen } = useGoalStore();

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
      <FlatList 
        data={goalsFiltered}
        keyExtractor={(e) => e.id}
        style={styles.goalsContainerList}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: 'red' }}>
            <Text>{item.text}</Text>
          </View>
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
    backgroundColor: '#4bc899',
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
    paddingVertical: 24,
  }
})