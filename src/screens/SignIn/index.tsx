import React from "react";
import { StatusBar } from "react-native";

import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from "../../assets/illustration.png";

import { Container, LeeSinImage, Content, Title, Subtitle } from "./styles";

export function SignIn() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <LeeSinImage source={IllustrationImg} resizeMode="stretch" />

      <Content>
        <Title>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Title>

        <Subtitle>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Subtitle>

        <ButtonIcon title="Entrar no Discord" />
      </Content>
    </Container>
  );
}
