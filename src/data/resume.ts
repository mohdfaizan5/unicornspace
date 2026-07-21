import type { ReactNode } from "react";

export type HackathonLink = {
  title: string;
  href: string;
  icon?: ReactNode;
};

export type Hackathon = {
  title: string;
  dates: string;
  location?: string;
  description?: string;
  image?: string;
  links?: HackathonLink[];
};

export type ResumeData = {
  /** Absolute site URL, used for OpenGraph/canonical links. */
  url: string;
  /** Studio / person name. */
  name: string;
  /** Path (or absolute URL) to the avatar/logo used in OG images. */
  avatarUrl?: string;
  hackathons: Hackathon[];
};

export const DATA: ResumeData = {
  url: "https://unicorn-space.com",
  name: "UnicornSpace",
  avatarUrl: "/logo-white-256x256.png",
  hackathons: [],
};
