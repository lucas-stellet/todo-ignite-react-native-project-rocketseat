import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#191919',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000',
    maxHeight: 173,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    top: -25,
  },
  input: {
    flex: 1,
    color: '##F2F2F2',
    backgroundColor: '#262626',
    padding: 16,
  },
  newTaskButton: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 10,
  },
  content: {
    flex: 1,
    backgroundColor: '#191919',
  },
});
