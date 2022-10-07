import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';
import ListItem from './src/components/ListItem';
import todoList from './src/database/todoList';

export default function App() {
  const [work, setWork] = useState('')
  const [todo, setTodo] = useState([...todoList])

  console.log(todo);

  useEffect(() => { }, [todo])

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', margin: 10 }}>
        <TextInput style={styles.inputWork} placeholder='Enter work here...' value={work} onChangeText={setWork} />
        <Button style={styles.addWork} title='Add Todo' onPress={todo => setTodo([...todo])} />
      </View>

      <FlatList
        style={{ width: '100%' }}
        data={todoList}
        renderItem={({ item }) => <View>
          <ListItem todo={item} />
        </View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputWork: {
    flex: 1,
    borderColor: '#2d3436',
    borderWidth: 1,
    padding: 10,
  },
  addWork: {
    margin: 5,
  }
});
