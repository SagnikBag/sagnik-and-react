import conf from '../conf.js';
import { Client, Account, ID,Databases,Storage,Query } from 'appwrite';

export class Service{
    client = new Client()
   Databases;
   bucket;

   constructor(){
    this.client
        .setEndpoint (conf.appwriteUrl) 
        .setProject (conf.appwriteProjectId);
        this.Databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
   }

   async createPost({title,slug,content,
    featuredImage,ststus,userId
   }){
    try {
        return await this.Databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                slug,
                content,
                featuredImage,
                ststus,
                userId
            }

        )

    } catch (error) {
        throw new Error(error.message);
        
    }
   }
   
   async updatePost({title,slug,content,
    featuredImage,ststus,userId}){
        try {
            await this.Databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    ststus,
                    
                }
            )
        } catch (error) {
            throw new Error(error.message);

        }
    }
    async deletePost ({slug}){
        try {
            await this.Databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
             return true

        } catch (error) {
            throw new Error(error.message);
            return false;
        }
    }
    async getPost ({slug}){
        try {
            return await this.Databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )

        } catch (error) {
            throw new Error(error.message);
            return false;
        }
    }
    async getPosts ({queries = [Query.equal("status",
        "active")]}){
                try {
                    return await this.Databases.listDocuments(
                        conf.appwriteDatabaseId,
                        conf.appwriteCollectionId,
                        queries,
                        
                    )
                } catch (error) {
                    throw new Error(error.message);
                    return false;
                }
    }

    //file upload services

   async uploadFile({file}){
    try {
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )

    } catch (error) {
       throw new error(error.message);
       return false; 
    }
   }

   async deleteFile({fileId}){
    try {
       return await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
         return true
    } catch (error) {
        throw new Error(error.message);
        return false;
    }
   }
   getFilePreview({fileId}){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId,
        
    )
   }
}
   



const service = new Service();
export default service;