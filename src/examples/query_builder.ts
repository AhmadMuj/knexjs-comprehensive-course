import knex from "../config/knex";
import { Author } from "../types";

export const getAuthorsPaginated = async (
  limit: number,
  offset: number
): Promise<{ results: Partial<Author>[]; count: number }> => {
  const query_builder = knex("authors")
    .select("id")
    .where("name", "like", "%a%");

  const authors = await query_builder.limit(limit).offset(offset);

  const count = Number((await query_builder.clone().clearSelect().count().first())?.count);

  return {
    results: authors,
    count,
  };
};
