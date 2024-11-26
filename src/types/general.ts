type Testimonial = {
  name: string;
  role: string;
  description: string;
};

type Project = {
  name: string;
  slug: string;
  thumbnail: string;
  year: number;
  tags?: string[];
  description?: string;
  content: {
    h1: string;
    images: string[];
    text: string;
  };
};
