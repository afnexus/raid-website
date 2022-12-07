import { primary } from "@afnexus/hummingbird-ui-assets";
import {
  Heading,
  Tag,
  Box,
  Text,
  Container,
  Avatar,
  Divider,
  CSSReset,
} from "@chakra-ui/react";
import md from "markdown-it";
import { useMemo } from "react";
import { PostData } from "../../features/blog/types";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import {
  getFileReadStaticPaths,
  getFileReadStaticProps,
} from "../../features/file-read";

export type BlogPostPageProps = { frontmatter: PostData; content: string };

export default function BlogPostPage(props: BlogPostPageProps) {
  const { id, date, title, description, author, tags } = props.frontmatter;
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
        {author && date && (
          <Box mt={3} display="flex" alignItems="center" gap={3}>
            <Avatar size="sm" />
            <Text>
              By {author}, {date}
            </Text>
          </Box>
        )}
        <Divider mt={3} />
        <Prose>
          <Box
            mt={5}
            dangerouslySetInnerHTML={{ __html: md().render(props.content) }}
          />
        </Prose>
      </Container>
    </Box>
  );
}

// Generating the paths for each post
export async function getStaticPaths() {
  return getFileReadStaticPaths("content/posts");
}

// Generate the static props for the page
export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return getFileReadStaticProps(slug, "posts");
}
