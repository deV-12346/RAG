import { client } from "../../db/connectDB";
import pgVector from "pgvector/pg"
export const getDocument = async (vector: number[]) => {
  try {
    const documents = await client.query(
      `select id, content, metadata, 1 - (embedding <=> $1::vector) as similarity from document order by embedding <=> $1::vector limit 5`,
      [pgVector.toSql(vector)],
    );
    console.log("vector search .....")
    return documents.rows
  } catch (error) {
    throw error;
  }
};
