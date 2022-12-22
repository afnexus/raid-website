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
import { useMemo } from "react";
import { BlogData } from "../../features/blog/types";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import {
  getFileReadStaticPaths,
  getFileReadStaticProps,
} from "../../features/file-read";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { components } from "../../features/file-read/mdx-components";

export type BlogPostPageProps = {
  frontmatter: BlogData;
  content: MDXRemoteSerializeResult;
};

export default function BlogPostPage({
  frontmatter,
  content,
}: BlogPostPageProps) {
  const { id, date, title, description, author, tags } = frontmatter;
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
          <MDXRemote {...content} components={components} />
        </Prose>
      </Container>
    </Box>
  );
}

// Generating the paths for each post
export async function getStaticPaths() {
  return getFileReadStaticPaths("content/blog");
}

// Generate the static props for the page
export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return await getFileReadStaticProps(slug, "blog");
}
