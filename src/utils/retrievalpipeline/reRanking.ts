import { cohere } from "../../libs/cohere";
import { Document } from "./combineResults";

export const reRanking = async(query: string,documents:Document[],topN=5) =>{
    try {
        if(documents.length === 0) return []
        const res = await cohere.rerank({
            model:"rerank-v4.0-pro",
            documents: documents.map((d)=>d.content),
            query,
            topN
        })
        return res.results.map((r)=>({
            ...documents[r.index],
            rerankscore:r.relevanceScore
        }))
    } catch (error) {
        console.error("Cohere Re rank failed to generate")
        return documents.slice(0,topN)
    }
}