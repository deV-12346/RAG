import { ai } from "../libs/gemini"
export const generateEmbedding = async(contents:string) =>{
      const result = await ai.models.embedContent({
         model:"gemini-embedding-001",
         contents,
         config:{
            outputDimensionality:500,
            taskType: "RETRIEVAL_DOCUMENT"
         }
      })
      const embedding = result.embeddings?.[0].values
      if(!embedding){
        throw new Error("Failed to embed document")
      }
      return embedding
}