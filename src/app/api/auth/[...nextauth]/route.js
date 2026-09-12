import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
//? fake users list hre.
const userList = [
    {name:"hablu",password:"1234"},
    {name:"karim",password:"4567"},
    {name:"mamnur",password:"7890"},
]
export const authOptions = {
    providers: [
        //Todo All Provider here.
        CredentialsProvider({
          
            name: 'Email & Password',

            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },

                SceretCode: { label: "secret code", type: "number" },
            },

            async authorize(credentials, req) {
                const { username,password,SceretCode} = credentials;
                const user = userList.find(u=>u.name==username);
                console.log('all user',user);

                if(!user){
                    return null
                }
                const isPasswordOK = user.password == password
                console.log('paswrod',isPasswordOK);
                if(isPasswordOK){
                    return user
                }

                return null
            }
        })
    ],
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }