import { onDatabaseConnect } from "./config/knex";
import { getAuthorsPaginated } from "./examples/query_builder";

const main = async () => {
    await onDatabaseConnect();
    const authors = await getAuthorsPaginated(1 , 0);
    console.log(authors);
};

main();
