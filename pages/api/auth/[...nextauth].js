import { FirestoreAdapter } from "@next-auth/firebase-adapter"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],

  adapter: FirestoreAdapter({
    apiKey: "AIzaSyBzKMAchJUDAettxBBF360XbJFXrM1Thms",
    authDomain: "banglaflix-ae6d9.firebaseapp.com",
    projectId: "banglaflix-ae6d9",
    storageBucket: "banglaflix-ae6d9.appspot.com",
    messagingSenderId: "18334343369",
    appId: "1:18334343369:web:6619b491d1c4bf5eef2d18"
  }),
}

export default NextAuth(authOptions)