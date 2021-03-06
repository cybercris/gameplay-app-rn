import React from "react";
import { TextInputProps } from "react-native";

import { Container } from "./styles";

type Props = {
  data: string;
};

export function TextArea({ ...rest }: TextInputProps) {
  return <Container {...rest} />;
}
