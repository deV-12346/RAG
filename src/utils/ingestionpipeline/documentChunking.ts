import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters"

export const documentChunking = async(document:any) =>{
       const splitter = new RecursiveCharacterTextSplitter({
          chunkSize:500,
          chunkOverlap:100,
       })
       const chunks =  await splitter.splitDocuments(document)
       return chunks
}