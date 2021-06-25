import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

import {
  BannerContent,
  Banner,
  Title,
  Subtitle,
  Members,
  Footer,
} from "./styles";
import { theme } from "../../global/styles/theme";

import BannerImg from "../../assets/banner.png";

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "Rodrigo",
      avatar_url: "https://github.com/cybercris.png",
      status: "online",
    },
    {
      id: "2",
      username: "Rodrigo",
      avatar_url: "https://github.com/cybercris.png",
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <Banner source={BannerImg}>
        <BannerContent>
          <Title>Lendários</Title>
          <Subtitle>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Subtitle>
        </BannerContent>
      </Banner>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <Members
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
      />

      <Footer>
        <ButtonIcon title="Entrar na partida" />
      </Footer>
    </Background>
  );
}
