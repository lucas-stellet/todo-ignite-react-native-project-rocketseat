import React from 'react';
import {
  Image,
  TouchableOpacity,
  TextInput,
  View,
  Text,
  FlatList,
} from 'react-native';
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
  TasksList,
  NoTasks,
  NoTasksTitle,
  NoTasksSubTitle,
} from './styles';

const logo = require('./../../../assets/logo.png');
const plus = require('./../../../assets/plus.png');
const clipboard = require('../../../assets/clipboard.png');

export function Home() {
  return (
    <Container>
      <Header>
        <Image source={logo} />
      </Header>
      <Form>
        <TaskInput
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'
        />
        <CreateTaskButton>
          <Image source={plus} />
        </CreateTaskButton>
      </Form>
      <Content>
        <TasksHeader>
          <TasksHeaderGroup>
            <CreatedTasksTitle>Criadas</CreatedTasksTitle>
            <TasksHeaderBadge>
              <TasksHeaderAmount>5</TasksHeaderAmount>
            </TasksHeaderBadge>
          </TasksHeaderGroup>
          <TasksHeaderGroup>
            <DoneTasksTitle>Concluídas</DoneTasksTitle>
            <TasksHeaderBadge>
              <TasksHeaderAmount>5</TasksHeaderAmount>
            </TasksHeaderBadge>
          </TasksHeaderGroup>
        </TasksHeader>

        <FlatList
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
        />
      </Content>
    </Container>
  );
}
