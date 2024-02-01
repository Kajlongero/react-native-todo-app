import { StyleSheet, Image, Modal, Text, View, Pressable } from "react-native";
import { useGoalStore } from "../stores/useGoalStore";

export const DeleteGoal = ({ id }) => {
  const { modalDeleteGoalOpen, removeGoal, setModalDeleteGoalOpen } = useGoalStore();

  const handleToggleModal = () => setModalDeleteGoalOpen();
  const handleDeleteGoal = () => {
    handleToggleModal();
    removeGoal(id);
  };

  return (
    <Modal visible={modalDeleteGoalOpen} animationType="slide">
      <View style={styles.confimationModal}>
        <Image 
          source={require('../assets/areYouSure.jpg')}
          style={styles.confirmationImage}
        />
        <Text style={styles.confirmationText}>Are you sure you want to delete that goal?</Text>
        <View style={styles.buttonsContainer}>
          <Pressable style={styles.confirmationButtonFinalized} onPress={handleDeleteGoal}>
            <Text style={styles.confirmationButtonText}>
              Delete
            </Text>
          </Pressable>
          <Pressable style={styles.confirmationButtonCancel} onPress={handleToggleModal}>
            <Text style={styles.confirmationButtonText}>
              Cancel
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  confimationModal: {
    flex: 1,
    height: 280,
    backgroundColor: '#1a1a1a',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmationImage: {
    width: 128,
    height: 128,
    borderRadius: 12,
    aspectRatio: 1,
  },
  confirmationText: {
    width: 200,
    color: '#fff',
    marginTop: 4,
    marginBottom: 16,
    fontSize: 20,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  confirmationButtonCancel: {
    backgroundColor: '#4bc899',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  confirmationButtonFinalized: {
    backgroundColor: 'red',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  confirmationButtonText: {
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});