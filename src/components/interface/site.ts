export interface Site {
  id: number;
  name: string;
  url: string;
  categories: string[];
  image: string;
  description?: string;
  sponsored?: boolean;
}
