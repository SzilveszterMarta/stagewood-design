import { Client, Databases } from 'appwrite'

export const createAppwriteClient = () => {
  const config = useRuntimeConfig()

  const client = new Client()
    .setEndpoint(config.public.appwriteEndpoint)
    .setProject(config.public.appwriteProjectId)

  const databases = new Databases(client)

  return {
    client,
    databases
  }
}
