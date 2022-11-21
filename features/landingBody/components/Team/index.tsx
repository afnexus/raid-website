import { Card, CardBody, CardHeader, Center, Divider, Heading, Image, Text } from "@chakra-ui/react";
import { primary, secondary } from "@afnexus/hummingbird-ui-assets";

type TeamProps = {
    name: string;
    description: string;
    image: string;
}

export default function Team(props: TeamProps) {
    const { name, description, image } = props;
    return (
        <Card color={"black"} background={"white"} h="50vh">
            <CardHeader textAlign={"center"}>
                <Heading 
                size="lg"
                textTransform="uppercase"
                bgGradient={`linear(to-r, ${primary[800]}, ${ primary[400] } , ${ secondary[500]})`}
                bgClip='text'
                >
                {name}
                </Heading>
            </CardHeader>
            <Divider/>
            <CardBody textAlign={"center"}>
                <Center>
                    <Image 
                    alt={name} 
                    boxSize="150px" 
                    display="flex"
                    objectFit='cover' 
                    src={image} 
                    filter={`brightness(0) saturate(100%) invert(27%) sepia(11%) saturate(5263%) hue-rotate(194deg) brightness(98%) contrast(95%)`}
                    padding={1}
                    marginBottom={3}
                    />
                </Center>
                <Text>{description}</Text>
            </CardBody>
        </Card>
    )
}