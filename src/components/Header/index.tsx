import { Flex, Image } from "@chakra-ui/react";
import Link from 'next/link'

export function Header() {
  return (
    <Flex as="header" mx="auto" height="100px" width="100%" maxWidth="1440px" justify="center" align="center">
      <Link href="/" passHref>
        <Image src="images/logo-cities.svg" alt="logo: Word Trip" cursor="pointer"/>
      </Link>
    </Flex>
  );
}
