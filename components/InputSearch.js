import { View, TextInput, Modal, StyleSheet } from 'react-native';
import { useGoalStore } from '../stores/useGoalStore';

export const InputSearch = () => {
  const { handleFilterList } = useGoalStore();

  const handleTextChange = (text) => {
    handleFilterList(text);
  }

  return (
    <View style={styles.searchInputContainer} >
      <TextInput 
        style={styles.searchInput} 
        placeholder="Search goal" 
        placeholderTextColor="#777"
        onChangeText={handleTextChange} 
        />
    </View>
  )
}

const styles = StyleSheet.create({
  searchInputContainer: {
    marginTop: 12,
    borderColor: '#4bc899',
    borderWidth: 1,
    borderRadius: 8,
  },
  searchInput: {
    color: '#fff',
    textDecorationColor: '#fff',
    backgroundColor: 'transparent',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
})