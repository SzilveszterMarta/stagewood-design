import { Client, Databases } from 'node-appwrite';

export const createServerAppwrite = () => {
  const config = useRuntimeConfig();

  const client = new Client()
    .setEndpoint(config.appwriteEndpoint)
    .setProject(config.appwriteProjectId)
    .setKey(config.appwriteApiKey);

  return {
    databases: new Databases(client),
  };
};
