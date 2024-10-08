import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import ToDoList from './src/ToDoList';

function App(): React.JSX.Element {
  const tasks = [
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]
  

  return (
    <SafeAreaView style={styles.app}>
      <ToDoList tasks={tasks}/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'beige',
  }
});

export default App;
