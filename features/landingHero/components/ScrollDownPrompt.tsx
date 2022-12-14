import { Box, keyframes, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const blinker = keyframes`
    50% {
        opacity: 0.3;
    }
`;

export default function ScrollDownPrompt() {
  const animation = `${blinker} infinite 2s linear`;
  return (
    <Box
      alignItems="center"
      animation={animation}
      color="white"
      justifyContent="center"
      position="fixed"
      textAlign="center"
      w="100vw"
      p={5}
      paddingTop={"85vh"}
    >
      <Text>scroll for more</Text>
      <ChevronDownIcon w={10} h={10} />
    </Box>
  );
}
