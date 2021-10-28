import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex as="header" mx="auto" height="100px" width="100%" maxWidth="1440px" justify="center" align="center">
      <Image src="images/logo-cities.svg" alt="logo: Word Trip" />
    </Flex>
  );
}
