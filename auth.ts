import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./app/lib/prisma"
import NextAuth from "next-auth"

export const { handlers, signIn, signOut, auth } = NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [],
})
