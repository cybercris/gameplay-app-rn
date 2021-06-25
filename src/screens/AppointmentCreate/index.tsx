import React, { useState } from "react";
import { View, Platform, ScrollView } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { ModalView } from "../../components/ModalView";
import { Guilds } from "../Guilds";
import { GuildProps } from "../../components/Guild";

import {
  Container,
  Label,
  Form,
  Select,
  GuildImg,
  SelectBody,
  Field,
  Column,
  Divider,
  CaracteresLimit,
  Footer,
} from "./styles";
import { theme } from "../../global/styles/theme";

export function AppointmentCreate() {
  const [category, setCategory] = useState("");
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView>
        <Background>
          <Header title="Agendar Partida" />

          <Label category>Categoria</Label>

          <CategorySelect
            hasCheckbox
            setCategory={setCategory}
            categorySelected={category}
          />

          <Form>
            <RectButton onPress={handleOpenGuilds}>
              <Select>
                {guild.icon ? <GuildIcon /> : <GuildImg />}

                <SelectBody>
                  <Label>
                    {guild.name ? guild.name : "Selecione um servidor"}
                  </Label>
                </SelectBody>

                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </Select>
            </RectButton>

            <Field>
              <View>
                <Label>Dia e mês</Label>

                <Column>
                  <SmallInput maxLength={2} />
                  <Divider>/</Divider>
                  <SmallInput maxLength={2} />
                </Column>
              </View>
              <View>
                <Label>Hora e minuto</Label>

                <Column>
                  <SmallInput maxLength={2} />
                  <Divider>:</Divider>
                  <SmallInput maxLength={2} />
                </Column>
              </View>
            </Field>

            <Field description>
              <Label>Descrição</Label>

              <CaracteresLimit>Max 100 caracteres</CaracteresLimit>
            </Field>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />

            <Footer>
              <Button title="Agendar" />
            </Footer>
          </Form>
        </Background>
      </ScrollView>

      <ModalView visible={openGuildsModal}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </Container>
  );
}
