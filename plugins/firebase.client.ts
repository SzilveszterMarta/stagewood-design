import { initializeApp, type FirebaseOptions } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()

  const firebaseConfig: FirebaseOptions = {
    apiKey: runtimeConfig.public.firebaseApiKey as string,
    authDomain: runtimeConfig.public.firebaseAuthDomain as string,
    projectId: runtimeConfig.public.firebaseProjectId as string,
    storageBucket: runtimeConfig.public.firebaseStorageBucket as string,
    messagingSenderId: runtimeConfig.public.firebaseMessagingSenderId as string,
    appId: runtimeConfig.public.firebaseAppId as string
  }

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  return {
    provide: {
      firestore: db
    }
  }
})

