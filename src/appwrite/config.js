import conf from "../conf/conf.js";
import { Client, Databases, Query, ID, Storage } from "appwrite";

export class Service {
    client = new Client()
    databases
    bucket

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectID)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    // Database methods 
    async createPost({slug, title, content, userID, imageUrl, status}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                ID.unique(),  // Generate unique document ID
                { title, slug, content, userID, imageUrl, status }
            );
        } catch (error) {
            console.log(error);
        }
    }

    async getPost(slug) {
        try {
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                [Query.equal("slug", slug)]
            );
            
            if (response.total > 0) {
                return response.documents[0];
            } else {
                throw new Error("Post not found");
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                queries
            );
        } catch (error) {
            console.log(error)
        }
    }
    
    async deletePost(id) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                id
            )
            return true
        } catch (error) {
            console.log(error)
        }
    }
    
    async updatePost(id, { title, slug, content, imageUrl, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                id,
                { title, slug, content, imageUrl, status }
            );
        } catch (error) {
            console.log(error);
        }
    }

    // Storage methods (unchanged)
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketID, 
                ID.unique(), 
                file
            );
        } catch (error) {
            console.log(error)
        }
    }

    async deleteFile(fileID) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketID,
                fileID
            );
            return true
        } catch (error) {
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