import conf from "../conf/conf.js";
import { Client, Databases, Query, ID , Storage } from "appwrite";

export class Service{
    client = new Client()
    databases
    bucket

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectID)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    //Database methods 
    async createPost({slug, title, content, userID, imageUrl, status}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID, 
                slug,
                {title, content, userID, imageUrl, status}
            )
        }
        catch(error){
            console.log(error)
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            );
        } catch (error) {
            console.log(error);
        }
    }

    async getPosts(queries= [Query.equal("status", "active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                queries
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
    
    async updatePost(slug ,{title, content, imageUrl, status}){
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
            return await this.bucket.createFile(
                conf.appwriteBucketID, 
                ID.unique(), 
                file
            );
        }
        catch(error){
            console.log(error)
        }
    }

    async deleteFile(fileID){
        try{
            await this.bucket.deleteFile(
                conf.appwriteBucketID, // bucketId
                fileID // fileId
            );
            return true
        }
        catch(error){
            console.log(error)
    }
}

getFilePreview(fileID) {
    return this.bucket.getFilePreview(
        conf.appwriteBucketID,
        fileID
    );
}
}

const service = new Service()
export default service