import { primary } from "@afnexus/hummingbird-ui-assets";
import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Tag,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { BlogData } from "../types";

export type BlogCardProps = BlogData;

export default function BlogCard(props: BlogCardProps) {
  const router = useRouter();
  const { id, date, title, description, author, tags } = props;
  const tagsAsArray = useMemo(() => {
    if (!tags) return [];
    return tags.split(", ");
  }, [tags]);
  return (
    <Card
      size="sm"
      color={primary[50]}
      backgroundColor={primary[800]}
      onClick={() => router.push(`/blog/${id}`)}
      cursor="pointer"
    >
      <CardBody>
        {title && <Heading size="lg">{title}</Heading>}
        {description && <Text>{description}</Text>}
        {tags && (
          <Box mt={3}>
            {tagsAsArray.map((tag, i) => (
              <Tag key={i} mr={2} mb={2}>
                {tag}
              </Tag>
            ))}
          </Box>
        )}
      </CardBody>
      <Divider />
      <CardFooter>
        {author && date && (
          <Box display="flex" alignItems="center" gap={3}>
            <Avatar size="sm" />
            <Text>
              By {author}, {date}
            </Text>
          </Box>
        )}
      </CardFooter>
    </Card>
  );
}
