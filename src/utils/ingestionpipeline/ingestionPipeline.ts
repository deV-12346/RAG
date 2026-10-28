import { documentLoader } from "./documentLoader"
import { documentChunking } from "./documentChunking"
import { generateEmbedding } from "../generateEmbedding"
import { saveDocument } from "./saveDocument"
import { client } from "../../db/connectDB";
export const ingestionPipeline = async () => {
    try {
        const document  = await documentLoader()
        const chunks = await documentChunking(document)
        await client.query("truncate table document")
        for(const chunk of chunks){
            const vector = await generateEmbedding(chunk.pageContent)
            const result = await saveDocument({
                content:chunk.pageContent,
                metadata:chunk.metadata,
                vector
            })
            console.log(result)
        }
        console.log("Ingestion completed successfully");
    } catch (error) {
        throw error
    }
};
