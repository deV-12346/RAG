import { TextLoader } from "@langchain/classic/document_loaders/fs/text"

export const documentLoader = async() =>{
    const loader = new TextLoader("./data/sample.txt")
    const document = await loader.load()
    return document
}