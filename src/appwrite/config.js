import conf from "../conf/conf";
import { Client, Databases, Query, ID , Storage, ImageGravity, ImageFormat} from "appwrite";

export class Service{
    client = new Client()
    databases
    bucket

    constructor(){
        this.client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66c61a5d000d73102232")
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    //Database methods 
    async createPost({slug, title, content, userID, imageUrl, status}){
        try{
            return await this.databases.createDocument(
                "66cc9c7700022ecf031b",
                "66cc9c98001bd1aa9d87", 
                slug,
                {title, content, userID, imageUrl, status}
            )
        }
        catch(error){
            console.log(error)
        }
    }

    async getPost({slug}){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID, 
                slug
            ); 
        }
        catch(error){
            console.log(error)
        }
    }

    async getPosts(queries= Query.equal("status", "active")){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                [queries] 
            );

        }
        catch(error){
            console.log(error)
        }
    }
    
    async deletePost(slug){
        try{
                await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            )
            return true
        }
        catch(error){
            console.log(error)
        }
    }
    
    async updatePost(slug ,{ title, content, imageUrl, status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {title, content, imageUrl, status}
            );
        }
        catch(error){
            console.log(error)
        }
    }


    // STORAGE METHODS


    async uploadFile(file){
        try{
            return await this.storage.createFile(
                conf.appwriteBucketID, 
                ID.unique, 
                file
            );
        }
        catch(error){
            console.log(error)
        }
    }

    async deleteFile(fileID){
        try{
            await this.storage.deleteFile(
                conf.appwriteBucketID, // bucketId
                fileID // fileId
            );
            return true
        }
        catch(error){
            console.log(error)
    }
}

    getFilePreview(fileID){
    try{
        return this.storage.getFilePreview(
            "66cc9eb1000c6013e3b6", 
            fileID            
        ).href;
    }
    catch(error){
        console.log(error)
    }
    }
}

const service = new Service()
export default Service