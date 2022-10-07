import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Keyboard, StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import ToDo from './src/components/Todo';
import Form from './src/components/Form';

export default function App() {
  const [work, setWork] = useState('')
  const [todo, setTodo] = useState([])

  const handleAddToDo = () => {
    setTodo([...todo, work])
    setWork('')
    Keyboard.dismiss()
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      {/* Header */}
      <Header header="To Do List" />

      {/* To Do List */}
      <View style={styles.todoList}>
        <FlatList
          data={todo}
          keyExtractor={item => item}
          renderItem={({ item }) => <ToDo todo={item} />}
        />
      </View>

      {/* Form */}
      <Form work={work} setWork={setWork} todo={todo} setTodo={handleAddToDo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoList: {
    width: '100%',
    flex: 1,
    marginVertical: 10,
  }
});
