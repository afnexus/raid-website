import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { EventData } from "../types";

const eventsDirectory = path.join(process.cwd(), "content/events");

export function getSortedEventsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(eventsDirectory);
  const allEventsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(eventsDirectory, fileName);
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
  return (allEventsData as any as EventData[]).sort(
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
