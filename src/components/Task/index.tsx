import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import {
  Container,
  TaskDescription,
  CheckBoxContainer,
  CheckBox,
  TrashContainer,
} from './styles';

export interface Task {
  description: string;
  id: string;
  completed: boolean;
}

type TaskProps = {
  task: Task;
  onCompleted: (event: GestureResponderEvent) => void;
  onRemove: (event: GestureResponderEvent) => void;
};

export function TaskItem({ task, onCompleted, onRemove }: TaskProps) {
  return (
    <Container>
      <CheckBoxContainer activeOpacity={0.5} onPress={onCompleted}>
        {!task.completed ? (
          <FontAwesome5 name='circle' size={23} color='#4ea8de' />
        ) : (
          <FontAwesome5 name='check-circle' size={23} color='#4ea8de' />
        )}
      </CheckBoxContainer>

      <TaskDescription completed={task.completed}>
        {task.description}
      </TaskDescription>

      <TrashContainer activeOpacity={0.5} onPress={onRemove}>
        <FontAwesome5 name='trash-alt' size={18} color='#808080' />
      </TrashContainer>
    </Container>
  );
}
