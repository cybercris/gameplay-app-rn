import React from "react";
import { TextInputProps } from "react-native";

import { Container } from "./styles";

type Props = {
  data: string;
};

//erro de types styled components por causa do TextInput

export function SmallInput({ ...rest }: TextInputProps) {
  return <Container keyboardType="numeric" {...rest} />;
}
