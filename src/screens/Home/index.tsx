import React, { useState, useEffect } from 'react';
import { Image, FlatList } from 'react-native';
import { TaskItem, Task } from '../../components/Task';
import {
  Container,
  Header,
  Form,
  TaskInput,
  CreateTaskButton,
  TasksHeader,
  Content,
  TasksHeaderGroup,
  CreatedTasksTitle,
  DoneTasksTitle,
  TasksHeaderBadge,
  TasksHeaderAmount,
  NoTasks,
  NoTasksTitle,
  NoTasksSubTitle,
} from './styles';

const logo = require('./../../../assets/logo.png');
const plus = require('./../../../assets/plus.png');
const clipboard = require('../../../assets/clipboard.png');

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskDescription, setTaskDescription] = useState('');

  const [concludedTasks, setConcludedTasks] = useState(0);
  const [createdTasks, setCreatedTasks] = useState(0);

  function handleTaskAdd() {
    const newTaskId = String(tasks.length + 1);

    const newTask = {
      description: taskDescription,
      id: newTaskId,
      completed: false,
    };

    setTasks((prevState) => [...prevState, newTask]);

    setCreatedTasks((prevState) => prevState + 1);

    setTaskDescription('');
  }

  function deltaCreatedTasks() {
    setCreatedTasks((prevState) => prevState + 1);

    setConcludedTasks((prevState) => prevState - 1);
  }

  function deltaConcludedTasks() {
    setCreatedTasks((prevState) => prevState - 1);

    setConcludedTasks((prevState) => prevState + 1);
  }

  function handleToggleTaskConclusion(tasktoChange: Task) {
    const newState = tasks;

    const toggleTaskConclusion = !tasktoChange.completed;

    newState.splice(newState.indexOf(tasktoChange), 1, {
      ...tasktoChange,
      completed: toggleTaskConclusion,
    });

    setTasks(newState);

    if (toggleTaskConclusion) {
      deltaConcludedTasks();
      return;
    }

    deltaCreatedTasks();
  }

  function handleDeleteTask(taskToDelete: Task) {
    setTasks((prevState) =>
      prevState.filter((task) => task.id !== taskToDelete.id)
    );

    if (taskToDelete.completed) {
      setConcludedTasks((prevState) => prevState - 1);
    } else {
      setCreatedTasks((prevState) => prevState - 1);
    }
  }

  return (
    <Container>
      <Header>
        <Image source={logo} />
      </Header>
      <Form>
        <TaskInput
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'
          onChangeText={setTaskDescription}
          value={taskDescription}
        />

        <CreateTaskButton onPress={handleTaskAdd} activeOpacity={0.9}>
          <Image source={plus} />
        </CreateTaskButton>
      </Form>
      <Content>
        <TasksHeader>
          <TasksHeaderGroup>
            <CreatedTasksTitle>Criadas</CreatedTasksTitle>
            <TasksHeaderBadge>
              <TasksHeaderAmount>{createdTasks}</TasksHeaderAmount>
            </TasksHeaderBadge>
          </TasksHeaderGroup>
          <TasksHeaderGroup>
            <DoneTasksTitle>Concluídas</DoneTasksTitle>
            <TasksHeaderBadge>
              <TasksHeaderAmount>{concludedTasks}</TasksHeaderAmount>
            </TasksHeaderBadge>
          </TasksHeaderGroup>
        </TasksHeader>

        <FlatList
          data={tasks}
          ListEmptyComponent={() => (
            <NoTasks>
              <Image source={clipboard} />

              <NoTasksTitle>
                Você ainda não tem tarefas cadastradas
              </NoTasksTitle>

              <NoTasksSubTitle>
                Crie tarefas e organize seus itens a fazer
              </NoTasksSubTitle>
            </NoTasks>
          )}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onCompleted={() => handleToggleTaskConclusion(item)}
              onRemove={() => handleDeleteTask(item)}
            />
          )}
        />
      </Content>
    </Container>
  );
}
