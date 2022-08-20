import { Image, TouchableOpacity, TextInput, View, Text } from 'react-native';
import { styles } from './styles';

const logo = require('./../../../assets/logo.png');
const plus = require('./../../../assets/plus.png');

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'
        />
        <TouchableOpacity style={styles.newTaskButton}>
          <Image source={plus} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}></View>
    </View>
  );
}
