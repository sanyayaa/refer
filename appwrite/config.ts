import conf from "@/conf/config";
// @ts-ignore
import { Query, Client, Account, ID, Databases, Storage } from "appwrite";

const appwriteClient = new Client();

export const appwriteApi = appwriteClient
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProjectId);

export const account = new Account(appwriteClient);

const database = new Databases(appwriteClient);
const storage = new Storage(appwriteClient);
const bucketId = conf.appwriteBucketId;
export class AppwriteService {
  // creating user
  async createUserAccount(key: string) {
    console.log(key);
    const email = key;
    const password = key;
    try {
      const userAccount = await account.create(ID.unique(), email, password);
      if (userAccount) {
        return this.login(key);
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login(key: string) {
    const email = key;
    const password = key;
    try {
      return await account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      const data = await this.getCurrentUser();
      return Boolean(data);
    } catch (error) {}
    return false;
  }
  async getCurrentUser() {
    try {
      return account.get();
    } catch (error) {
      console.log("getuser error" + error);
    }
    return null;
  }
  async createInfluencer(influencerData: any) {
    try {
      return database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteInfluencerId,
        ID.unique(),
        influencerData
      );
    } catch (error) {
      console.log(error);
    }
  }

  async createBrand(brandData: any) {
    try {
      return database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteBrandId,
        ID.unique(),
        brandData
      );
    } catch (error) {
      console.log(error);
    }
  }

  async createChat(message: any) {
    try {
      return database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteChatId,
        ID.unique(),
        message
      );
    } catch (error) {
      console.log(error);
    }
  }

  async getBrandData(key: string) {
    try {
      return database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteBrandId,
        [Query.equal("key", key)]
      );
    } catch (error) {
      console.log(error);
    }
  }

  async getInfluencerData(key: string) {
    try {
      return database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteInfluencerId,
        [Query.equal("key", key)]
      );
    } catch (error) {
      console.log(error);
    }
  }

  async getMessages(roomID: string) {
    try {
      return database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteChatId,
        [Query.equal("room", roomID)]
      );
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      console.log("logout error" + error);
    }
  }

  async getAllBrands() {
    try {
      return database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteBrandId
      );
    } catch (e) {
      console.error(e);
    }
  }

  async getAllInfluencers() {
    try {
      return database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteInfluencerId
      );
    } catch (e) {
      console.error(e);
    }
  }

  async updateBrandConnection(collectionID: string, connections: string) {
    try {
      return database.updateDocument(
        conf.appwriteDatabaseId,

        conf.appwriteBrandId,
        collectionID,
        { connections }
      );
    } catch (e) {
      console.error(e);
    }
  }
  async updateInfluencerConnection(collectionID: string, connections: string) {
    try {
      return database.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteInfluencerId,
        collectionID,
        { connections }
      );
    } catch (e) {
      console.error(e);
    }
  }

  async updateBrandData(
    collectionID: string,
    name: string,
    description: string,
    website: string,
    profile_img: string
  ) {
    try {
      return database.updateDocument(
        conf.appwriteDatabaseId,

        conf.appwriteBrandId,
        collectionID,
        { name, description, website, profile_img }
      );
    } catch (e) {
      console.error(e);
    }
  }
  //temp
  async createBrande(brandData: any) {
    try {
      return database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteBrandId,
        ID.unique(),
        brandData
      );
    } catch (error) {
      console.log(error);
    }
  }

  async uploadProilePic(file: any) {
    try {
      return storage.createFile(bucketId, ID.unique(), file);
    } catch (error) {
      console.log(error);
    }
  }
}

const appwriteService = new AppwriteService();

export default appwriteService;
