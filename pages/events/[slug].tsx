import { primary } from "@afnexus/hummingbird-ui-assets";
import {
  Heading,
  Tag,
  Box,
  Button,
  Text,
  Container,
  Divider,
  CSSReset,
  Stack,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { EventData } from "../../features/events/types";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { useRouter } from "next/router";
import {
  getFileReadStaticPaths,
  getFileReadStaticProps,
} from "../../features/file-read";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { components } from "../../features/file-read/mdx-components";

export type EventPostPageProps = {
  frontmatter: EventData;
  content: MDXRemoteSerializeResult;
};

export default function BlogPostPage({
  frontmatter,
  content,
}: EventPostPageProps) {
  const router = useRouter();
  const { id, date, title, description, tags, location, url } = frontmatter;
  const tagsAsArray = useMemo(() => {
    if (!tags) return [];
    return tags.split(", ");
  }, [tags]);

  return (
    <Box minH="100vh" p={3} pt={20}>
      <CSSReset />
      <Container
        maxW="container.lg"
        p={10}
        background={primary[800]}
        rounded="xl"
      >
        <Stack direction="row"></Stack>
        <Stack>
          {title && (
            <Heading size="lg" color={primary[50]}>
              {title}
            </Heading>
          )}
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
          {location && date && (
            <Box mt={3} display="flex" alignItems="center" gap={3}>
              <Text>
                At <b>{location}</b> on <b>{date}</b>
              </Text>
            </Box>
          )}
        </Stack>
        {url && (
          <Box padding={4}>
            <Button width="100%" onClick={() => router.push(url)}>
              Register Here
            </Button>
          </Box>
        )}

        <Divider mt={3} />
        <Prose>
          <MDXRemote {...content} components={components} />
        </Prose>
      </Container>
    </Box>
  );
}

// Generating the paths for each post
export async function getStaticPaths() {
  return getFileReadStaticPaths("content/events");
}

// Generate the static props for the page
export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return getFileReadStaticProps(slug, "events");
}
