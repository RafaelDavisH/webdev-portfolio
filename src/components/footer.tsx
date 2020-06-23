/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Flex } from "@theme-ui/components";
import Contact from "./contact";

const Footer = () => {
  return (
    <Flex
      as="footer"
      sx={{
        input: {
          backgroundColor: `contactColor`,
          color: `text`,
        },
        textArea: {
          backgroundColor: `contactColor`,
          color: `text`,
        },
        h2: {
          color: `heading`,
        },
        justifyContent: `center`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
      }}
    >
      <Contact />
    </Flex>
  );
};

export default Footer;
