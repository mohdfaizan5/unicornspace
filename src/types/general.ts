type Testimonial = {
  name: string;
  role: string;
  description: string;
};

type ContentItem =
  | { type: "h1"; content: string }
  | { type: "p"; content: string }
  | { type: "image"; src: string; alt?: string };

type ContentArray = ContentItem[];

type Project = {
  name: string;
  slug: string;
  thumbnail: string;
  year: number;
  tags?: string[];
  description?: string;
  content: ContentItem[];
  // h1: string;
  // image: string;
  // image: string;

  // text: string;
  // };
};
