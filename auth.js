import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import User from "@/app/lib/modals/usersModal"
import bcrypt from "bcryptjs"
import connectDB from "@/app/lib/db"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }
        await connectDB()
        const user = await User.findOne({ email: credentials.email })

        if (!user) { throw new Error("User not found") }

        const isPasswordMatching = await bcrypt.compare(credentials.password, user.password)

        if (!isPasswordMatching) { throw new Error("Invalid credentials") }
        
        return { id: user._id, email: user.email, name: user.username }
      }
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.name = user.name;
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name;
      }
      return session
    }
  },
  pages: {
    signIn: "/login"
  },
  secret: process.env.AUTH_SECRET
})