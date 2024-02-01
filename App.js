import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import { Header } from './components/Header';
import { AddGoal } from './components/AddGoal';
import { GoalList } from './components/GoalList';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <AddGoal />
      <GoalList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
  }
});
