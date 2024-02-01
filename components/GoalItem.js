import { StyleSheet, View, Text, Pressable } from 'react-native'
import { useGoalStore } from '../stores/useGoalStore'
import { DeleteGoal } from './DeleteGoal';

export const GoalItem = ({ id, text }) => {
  const { setModalDeleteGoalOpen } = useGoalStore(); 

  const handleOpenModal = () => setModalDeleteGoalOpen();

  return (
    <View>
      <Pressable style={styles.goalContainer} onLongPress={handleOpenModal}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
      <DeleteGoal id={id}/>
    </View>
  )
}

const styles = StyleSheet.create({
  goalContainer: {
    backgroundColor: '#4bc899',
    padding: 12,
    borderRadius: 6,
    marginVertical: 12,
  },
  goalText: { 
    color: '#fff',
  }
}) 