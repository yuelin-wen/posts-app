import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import { connectToDB } from "@utls/database";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {
        try {
            // serverLess -> Lambda -> dynamodb
            await connectToDB();

            // check if a suer already exists


            // if not, create a new user
            true;

        } catch (error) {
            console.log(error)
            return false;
        }
    }
})


export { handler as GET, handler as POST }