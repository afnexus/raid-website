import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Divider,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { primary, secondary } from "@afnexus/hummingbird-ui-assets";

type TeamProps = {
  name: string;
  description: string;
  image: string;
  subtitle?: string;
};

export default function Team(props: TeamProps) {
  const { name, description, image, subtitle } = props;
  return (
    <Card
      color={"white"}
      background={primary[800]}
      rounded="3xl"
      h="100%"
      mb={3}
    >
      <CardHeader textAlign={"center"}>
        <Heading
          size="lg"
          bgGradient={`linear(to-r, ${primary[200]}, ${primary[100]} , ${secondary[400]})`}
          bgClip="text"
        >
          {name}
        </Heading>
        {subtitle && (
          <Text size="sm">
            <b>{subtitle}</b>
          </Text>
        )}
      </CardHeader>
      <CardBody textAlign={"center"}>
        <Center>
          <Image
            alt={name}
            boxSize={120}
            display="flex"
            objectFit="cover"
            src={image}
            filter={`brightness(0) saturate(100%) invert(27%) sepia(10%) saturate(5263%) hue-rotate(194deg) brightness(300%) contrast(80%)`}
            padding={1}
            marginBottom={3}
          />
        </Center>
        <Text textAlign="left">{description}</Text>
      </CardBody>
    </Card>
  );
}
