import styled from "styled-components/native";

export const Container = styled.TextInput`
  width: 100%;
  height: 95px;
  background-color: ${({ theme }) => theme.colors.secondary40};
  border-radius: 8px;
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.colors.heading};
  margin-right: 4px;
`;
