import { StyleSheet } from 'react-native';

import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #191919;
  flex-direction: column;
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: #000;
  max-height: 173px;
  padding: 24px;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  flex-direction: row;
  margin-left: 24px;
  margin-right: 24px;
  top: -25px;
`;

export const TaskInput = styled.TextInput`
  flex: 1;
  color: #f2f2f2;
  background-color: #262626;
  padding: 16px;
  height: 52px;
  border-radius: 10px;
`;

export const CreateTaskButton = styled.TouchableOpacity`
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  background-color: #1e6f9f;
  border-radius: 10px;
  margin-left: 5px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: #191919;
  margin: 0px 24px;
`;

export const TasksHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 327px;
  height: 19px;
  margin-bottom: 20px;
`;

export const TasksHeaderGroup = styled.View`
  flex-direction: row;
`;

export const CreatedTasksTitle = styled.Text`
  color: #4ea8de;
  font-weight: 700;
  font-size: 14px;
`;

export const DoneTasksTitle = styled.Text`
  color: #8284fb;
  font-weight: 700;
  font-size: 14px;
`;

export const TasksHeaderBadge = styled.View`
  padding: 2px 8px;
  margin-left: 8px;
  border-radius: 999px;
  width: 25px;
  height: 19px;
  background-color: #333333;
`;

export const TasksHeaderAmount = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 13px;
`;

export const NoTasks = styled.View`
  padding: 48px 20px;
  align-items: center;
  border-style: solid;
  border-top-width: 1px;
  border-color: #333333;
`;

export const NoTasksTitle = styled.Text`
  margin-top: 16px;
  font-size: 14px;
  line-height: 19.6px;
  color: #808080;
`;

export const NoTasksSubTitle = styled.Text`
  font-size: 14px;
  line-height: 19.6px;
  color: #808080;
`;
