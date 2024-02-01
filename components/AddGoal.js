import { StyleSheet, Modal, View, Button, TextInput, Text, Image, Pressable } from 'react-native';
import { useGoalStore } from '../stores/useGoalStore';

export const AddGoal = () => {
  const { newGoalText, modalNewGoalOpen, setModalNewGoalOpen, handleNewGoalText, addNewGoal } = useGoalStore();

  const handleModalOpen = () => setModalNewGoalOpen();
  const handleGoalText = (text) => handleNewGoalText(text);

  const addGoal = () => {
    addNewGoal({ id: `${Math.round(Math.random() * 999999999999999 + 1)}`, text: newGoalText });
    handleNewGoalText('');
    setModalNewGoalOpen();
  }

  return (
    <Modal visible={modalNewGoalOpen} animationType="slide">
      <View style={styles.modal}>
        <Pressable 
          onPress={handleModalOpen}
          style={styles.closeModal}
        >
          <Text style={styles.closeModalText}>
            X
          </Text>
        </Pressable>
        <Image 
          source={require('../assets/todoAppLogo.jpg')} 
          style={styles.modalImage} 
        />
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder="Cut the potatoes..."
            placeholderTextColor="#777"
            value={newGoalText}
            onChangeText={handleGoalText}
            style={styles.input}
          />
        </View>
        <Pressable 
          style={styles.addGoalContainer} 
          android_ripple={{ color: '#aaa' }} 
          onPress={addGoal}
        >
          <Text style={styles.buttonAddText}>Add Goal</Text>
        </Pressable>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#292929'
  },
  modalImage: { 
    height: 148,
    aspectRatio: '3/2',
    borderRadius: 16,
  },
  closeModal: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  closeModalText: {
    color: '#4bc899',
    fontSize: 24,
  },
  inputContainer: {
    marginTop: 24,
    marginBottom: 16,
    borderRadius: 4,
    borderColor: '#4bc899',
    borderWidth: 1,
    width: 240,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  input: {
    color: '#fff',
    borderColor: 'transparent',
  },
  addGoalContainer: {
    width: 125,
    backgroundColor: '#4bc899',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonAddText: {
    color: '#fff',
    fontWeight: '500',
  }
})