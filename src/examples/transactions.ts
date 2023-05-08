import knex from "../config/knex";

export const getLastAuthor = async () => {
  const author = await knex("authors").orderBy("created_at", "desc").first();
  return author;
};

export const createAuthorWithBook = async () => {
  try {
    await knex.transaction(async (trx) => {
      const author = (
        await trx("authors").insert(
          {
            name: "Transaction Author",
            bio: "Transaction author bio",
          },
          "*"
        )
      )[0];
      await trx("books").insert(
        {
          title: "The transaction book",
          author_id: author.id,
          price: 1000,
          genre_id: 1,
        },
        "*"
      );
    });
    console.log("Author and book created");
  } catch (e) {
    console.log("Error during transaction");
  }
};
