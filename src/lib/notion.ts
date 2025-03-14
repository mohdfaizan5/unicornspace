import "server-only";

import { Client } from "@notionhq/client";
import { cache } from "react";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { get } from "http";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getPages = cache(async () => {
  try {
    console.log("Fetching data from Notion API...");
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      // filter_properties: ["slug"],
    });
    return response;
  } catch (error) {}
});

export const getPagesSlugs = cache(async () => {
  return await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
  });
});

export const fetchBySlug = cache(async (slug: string) => {
  console.log(await getPages());

  return await notion.databases
    .query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "Name",
        title: {
          contains: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
});

export const fetchPageBlocks = cache(async (pageId: string) => {
  return await notion.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results as BlockObjectResponse[]);
});

// make a function that takes a normal text and converts to slug with all edge cases handled
export const toSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

// make a function that takes a slug and converts to normal text
export const fromSlug = (slug: string) => {
  return slug.replace(/-/g, " ").replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
};
