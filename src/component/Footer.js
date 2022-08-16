import React from "react";
import {
  Container,
  Column,
  FooterLink,
  Heading
} from "./FooterStyles";
  
const Footer = () => {
  return (
      <Container>
          <Column>
            <Heading>Kontakt</Heading>
            <FooterLink href="#">Produkter.dk</FooterLink>
            <FooterLink href="#">Esbjerg Brygge 30</FooterLink>
            <FooterLink href="#">6700 Esbjerg</FooterLink>
            <FooterLink href="#">kontakt@produkter.dk</FooterLink>
            <FooterLink href="#">+45 33 73 20 00</FooterLink>
          </Column>
          <Column>
            <Heading>Læs mere</Heading>
            <FooterLink href="#">Dataansvar</FooterLink>
            <FooterLink href="#">Cookies</FooterLink>
            <FooterLink href="#">Privatlivspolitik</FooterLink>
            <FooterLink href="#">Tilgængelighedserklæring</FooterLink>
          </Column>
        
      </Container>
  );
};
export default Footer;