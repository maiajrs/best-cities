import { Text, Flex, Image, Stack, Box, HStack } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Flex
      direction="column"
      width="100%"
      maxWidth="1440px"
      mx="auto"
      position="relative"
      height="100vh"
    >
      <Header />
      <Flex as="main" height="100%" width="100%">
        <Box
          backgroundImage="images/Background.png"
          backgroundRepeat="no-repeat"
          width="100%"
          height="335px"
        >
          <Flex
            height="100%"
            width="100%"
            maxWidth="1240px"
            mx="auto"
            px="10"
            align="center"
            position="relative"
          >
            <HStack spacing="30">
              <Stack spacing="5" maxWidth="450px">
                <Text fontSize="32" color="gray.50">
                  5 Continentes, <br /> infinitas possibilidades.
                </Text>
                <Text>
                  Chegou a hora de tirar do papel a viagem que você sempre
                  sonhou.{" "}
                </Text>
              </Stack>
              <Stack position="absolute" right="30px" bottom="-30">
              <Image src="images/Airplane.svg" alt="Airplane" />
              </Stack>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
