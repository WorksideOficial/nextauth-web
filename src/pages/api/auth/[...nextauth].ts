import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";

type ICredentials = {
  email: string;
  password: string;
}
export const authOptions = {
  pages: {
    signIn: '/pages/index'
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},

      async authorize({ email, password }: ICredentials) {
        const response = await fetch('http://localhost:8000/user/session', {
          method: 'POST',
          body: new URLSearchParams({ email, password })
        });

        const data = await response.json();

        if (data) {
          return { ...data, jwt: data.jwt }
        } else {
          return null
        }
      }
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,
}

export default NextAuth(authOptions)