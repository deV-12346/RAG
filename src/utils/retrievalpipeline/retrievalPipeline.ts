import { combineResults } from "./combineResults";
import { generateEmbedding } from "../generateEmbedding";
import { getDocument } from "./getDocument";
import { getKeyWordDocument } from "./getKeyWordDocument";
import { reRanking } from "./reRanking";

export const retrievalPipeline = async(input: string) => {
    const embedding = await generateEmbedding(input)
    console.log("embedding ....")
    if(!embedding){
        throw new Error("failed to  generate embedding")
    }
    const [vectorSearchresult,keywordSearchResult] = await Promise.all([
       getDocument(embedding),
       getKeyWordDocument(input)
    ])
    const result = combineResults(vectorSearchresult,keywordSearchResult)
    const reRankDocuments = await reRanking(input,result)
    console.log("re ranking .....")
    const content = reRankDocuments.map((document)=>document.content).join("\n\n")
    return content
};
