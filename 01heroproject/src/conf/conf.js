const conf = {
    appwriteUrl: String(import.meta.env.VITE_APP_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APP_APPWRITE_PROJECT),
    appwriteDatabaseId: String(import.meta.env.VITE_APP_APPWRITE_DATABASE),
    appwriteCollectionId: String(import.meta.env.VITE_APP_APPWRITE_COLLECTION),
    appwriteBucketId: String(import.meta.env.VITE_APP_APPWRITE_BUCKET),
}
 

export default conf