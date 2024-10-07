const conf = {
  appwriteUrl: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
  appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
  appwriteInfluencerId: String(
    process.env.NEXT_PUBLIC_APPWRITE_INFLUENCER_COLLECTION_ID
  ),
  appwriteBrandId: String(process.env.NEXT_PUBLIC_APPWRITE_BRAND_COLLECTION_ID),
  appwriteChatId: String(process.env.NEXT_PUBLIC_APPWRITE_CHAT_COLLECTION_ID),
  appwriteBucketId: String(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID),
  appwriteApi: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
};

export default conf;
