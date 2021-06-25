import React, { ReactNode } from "react";
import { Modal, ModalProps } from "react-native";

import { Background } from "../Background";

import { Container, Overlay, Bar } from "./styles";

type Props = ModalProps & {
  children: ReactNode;
};

export function ModalView({ children, ...rest }: Props) {
  return (
    <Modal transparent animationType="slide" {...rest}>
      <Overlay>
        <Container>
          <Background>
            <Bar />
            {children}
          </Background>
        </Container>
      </Overlay>
    </Modal>
  );
}
