import { client } from "../..//db/connectDB";

export const getKeyWordDocument = async (input: string) => {
  const query = `
    SELECT id, content
    FROM document
    WHERE search_vector @@
    websearch_to_tsquery('english', $1)
    ORDER BY ts_rank_cd(
      search_vector,
      websearch_to_tsquery('english', $1)
    ) DESC
    LIMIT 10;
  `;
  const result = await client.query(query, [input]);
  console.log("Key word search .......")
  return result.rows
};
