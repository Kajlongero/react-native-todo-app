import { View, TextInput, Text, Image, StyleSheet } from 'react-native'
import { InputSearch } from './InputSearch';
 
export const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.appInfo}>
        <Text style={styles.headerText}>TodoNativeApp</Text>
        <Image source={require('../assets/todoAppLogo.jpg')} style={styles.headerImage}/>
      </View>
      <InputSearch />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1a1a1a',
    paddingTop: 36,
    paddingBottom: 12,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  appInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  headerImage: {
    width: 72,
    height: 36,
    borderRadius: 8,
  },
});