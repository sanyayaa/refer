import {
  useBrandData,
  usePublicKey,
  useInfluencerData,
  useIsInfluencer,
} from "@/store";

import appwriteService from "./appwrite/config";

export async function createUser(key: string) {
  const user = await appwriteService.createUserAccount(key);
}
export async function checkUserExist(key: string) {
  console.log("checking if user exists otherwise registering new user");
  try {
    try {
      const data = await appwriteService.getCurrentUser().then();

      console.log(data);
      return data;
    } catch (error) {
      console.log("error getting user", error);
    }
    try {
      const res = await appwriteService.login(key);
      const data = await appwriteService.getCurrentUser().then();
      console.log(data);
      return data;
    } catch (error) {
      console.log("error logging in ", error);
    }
  } catch (error) {
    console.log("session creation failed", error);
  }
  try {
    const data = await createUser(key);
    console.log(data);
    await appwriteService.login(key);
    return data;
  } catch (error) {
    console.log("error creating user", error);
  }
}

export async function getInfluencerData(key: string) {
  const data = await appwriteService.getInfluencerData(key);
  return data;
}

export async function getBrandData(key: string) {
  const data = await appwriteService.getBrandData(key);
  return data;
}

export async function checkUserSetup(key: string) {
  const brandData = await appwriteService.getBrandData(key);
  if (brandData.total) {
    console.log("brand data", brandData);
    useIsInfluencer.setState({
      isInfluencer: false,
    });
    useBrandData.setState({
      documentId: brandData.documents[0].$id,
      key: brandData.documents[0].key,
      name: brandData.documents[0].name,
      description: brandData.documents[0].description,
      website: brandData.documents[0].website,
      address: brandData.documents[0].address,
      business_reg_code: brandData.documents[0].business_reg_code,
      links: brandData.documents[0].links,
      ecommerce_platform: brandData.documents[0].ecommerce_platform,
      api_key: brandData.documents[0].api_key,
      industry: brandData.documents[0].industry,
      profile_img: brandData.documents[0].profile_img,
      connections: brandData.documents[0].connections,
    });
  }

  const influencerData = await getInfluencerData(key);
  if (influencerData.total) {
    console.log(influencerData);
    useIsInfluencer.setState({
      isInfluencer: true,
    });
    useInfluencerData.setState({
      documentId: influencerData.documents[0].$id,
      key: influencerData.documents[0].key,
      name: influencerData.documents[0].name,
      bio: influencerData.documents[0].bio,
      links: influencerData.documents[0].links,
      niche: influencerData.documents[0].niche,
      main_platform: influencerData.documents[0].main_platform,
      follower_count: influencerData.documents[0].follower_count,
      connections: influencerData.documents[0].connections,
    });
  }

  if (brandData.total || influencerData.total) {
    return true;
  }
}

export async function generateWelcomeEmail(id: string) {
  try {
    const response = await fetch("/api/welcomeMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
  } catch (error) {
    console.log("error sending email", error);
  }
}

export async function generateDiscountCode(percentage: number, code: string) {
  try {
    const response = await fetch("/api/codeGen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ percentage: percentage, code: code }),
    });
    console.log(response);
    if (response.ok) {
      const data = await response.json();
    } else {
      console.log("An error occurred while creating the discount code.");
    }
  } catch (error) {
    console.error("Error creating discount code:", error);
  }
}
