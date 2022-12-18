import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogData } from "../blog/types";
import { EventData } from "../events/types";

// const postsDirectory = path.join(process.cwd(), "content/blog");

export function getSortedPostsData(postsDirectory: string) {
  // Get file names under /posts other than template.md
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter((fileName) => !fileName.includes("template.md"));
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return (allPostsData as any as BlogData[] | EventData[]).sort(
    ({ date: a }, { date: b }) => {
      if (!a || !b) return 0;
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    }
  );
}
