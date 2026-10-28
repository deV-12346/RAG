import { client } from "../../db/connectDB";
import pgVector from "pgvector/pg"
interface DocumentInterface {
  content: string;
  metadata: any;
  vector: number[];
}
export const saveDocument = async (data: DocumentInterface) => {
    const result = await client.query(
      `insert into document (content, metadata,embedding,search_vector) values ($1,$2,$3,to_tsvector('english', $1)) returning id`,
      [data.content,JSON.stringify(data.metadata),pgVector.toSql(data.vector)],
    );
    return result.rows;
};
