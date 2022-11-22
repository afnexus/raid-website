export type EventData = {
  id: string;
  date?: string;
  title?: string;
  description?: string;
  tags?: string; //comma seperated (e.g. "tag1, tag2")
  location?: string;
  url?: string;
};
