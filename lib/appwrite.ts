import { Client, Databases, Storage } from 'appwrite';

export const createAppwriteClient = () => {
  const config = useRuntimeConfig();

  const client = new Client()
    .setEndpoint(config.public.appwriteEndpoint)
    .setProject(config.public.appwriteProjectId);

  const databases = new Databases(client);
  const storage = new Storage(client);

  return {
    client,
    databases,
    storage,
  };
};
