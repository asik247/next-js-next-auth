import { connect } from "@/lib/mongodbConnect";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";

export const authOptions = {
    providers: [
        //Todo All Provider here.
        CredentialsProvider({

            name: 'Email & Password',

            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter Your Email" },
                password: { label: "Password", type: "password" },


            },

            async authorize(credentials, req) {

                const { email, password } = credentials;

                const collection = await connect("users");

                const user = await collection.findOne({
                    email: email
                });

                if (!user) {
                    return null;
                }

                const isPasswordOK = await bcrypt.compare(
                    password,
                    user.password
                );

                if (isPasswordOK) {
                    return user;
                }

                return null;
            }
        })
    ],

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            return true
        },
        async redirect({ url, baseUrl }) {
            return baseUrl
        },
        async session({ session, user, token }) {
            if(token){
                session.role = token.role,
                session.createdAt = token.createdAt
            }
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if(user){
                token:user.email,
                token.role = user.role,
                token.createdAt = user.createdAt
            }
            return token
        }

    }


}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }