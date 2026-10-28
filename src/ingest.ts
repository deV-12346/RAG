import { client } from "./db/connectDB";
import { ingestionPipeline } from "./utils/ingestionpipeline/ingestionPipeline";

ingestionPipeline().catch((err) => {
  console.error("Ingestion failed:", err);
  process.exitCode = 1;
}).finally(()=>client.end())
