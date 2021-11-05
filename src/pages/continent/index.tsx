import { Flex, Image, Text, Box, HStack} from "@chakra-ui/react";
import { Header } from "../../components/Header";

export default function Continent() {
  return (
    <Flex
      direction="column"
      width="100%"
      maxWidth="1440px"
      mx="auto"
      position="relative"
    >
      <Header />
      <Flex
        as="section"
        width="100%"
        position="relative"
        mx="auto"
        justify="center"
        align="center"
      >
        <Image
          src="images/europa/europa-capa.jpg"
          alt="céu noturno estrelado background"
          width="100%"
          display="block"
          height="500px"
        />
        <Flex position="absolute" bottom="20" left="40">
          <Text fontSize="48" fontWeight="bold" color="gray.50" textAlign="end">
            Europa
          </Text>
        </Flex>
      </Flex>
      <Flex as="main" maxWidth="1160px" mx="auto" py="20">
        <HStack spacing="8" as="section" gridTemplateColumns="1fr 1fr" display="grid">
          <Box>
            <Text>
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
            </Text>
          </Box>
          <Box>
              <HStack spacing="auto">
                <Flex direction="column">
                    <Text color="yellow.400" textAlign="center" fontWeight="500" fontSize="48" lineHeight="72px">50</Text>
                    <Text fontWeight="500">países</Text>
                </Flex>
                <Flex direction="column">
                    <Text color="yellow.400" textAlign="center" fontWeight="500" fontSize="48" lineHeight="72px">60</Text>
                    <Text fontWeight="500">línguas</Text>
                </Flex>
                <Flex direction="column">
                    <Text color="yellow.400" textAlign="center" fontWeight="500" fontSize="48" lineHeight="72px">27</Text>
                    <Text fontWeight="500">cidades + 100</Text>
                </Flex>
              </HStack>
          </Box>
        </HStack>
      </Flex>
    </Flex>
  );
}
