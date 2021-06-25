import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.heading};
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BulletStatus = styled.View`
  background-color: ${({ theme, isOnline }) =>
    isOnline ? theme.colors.on : theme.colors.primary};
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 9px;
`;

export const NameStatus = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.colors.highlight};
`;
