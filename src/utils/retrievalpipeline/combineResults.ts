export interface Document {
  id: string;
  content: string;
  metadata?: any;
  similarity?: number;
}
interface RankedDocument extends Document {
  rrfScore: number;
}
export const combineResults = (
  vectorResult: Document[],
  keyWordResult: Document[],
  limit = 5,
) => {
  const k = 60;
  const documents = new Map<string, RankedDocument>();
  const addResult = (results: Document[]) => {
    results.forEach((document, index) => {
      const id = String(document.id);
      const rank = index + 1;
      const score = 1 / (k + rank);

      const existing = documents.get(id);
      if (existing) {
        existing.rrfScore += score;
      } else {
        documents.set(id, {
          ...document,
          rrfScore: score,
        });
      }
    });
  };
  addResult(vectorResult)
  addResult(keyWordResult)
  console.log("hybrid search ......")
  return [...documents.values()].sort((a,b)=>b.rrfScore - a.rrfScore).slice(0,limit)
};
