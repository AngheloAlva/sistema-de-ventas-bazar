import Credentials from "next-auth/providers/credentials"
import prisma from "./app/lib/prisma"
import NextAuth from "next-auth"
import bcrypt from "bcryptjs"
import { z } from "zod"

export const { handlers, signIn, signOut, auth } = NextAuth({
	pages: {
		signIn: "/auth/login",
		newUser: "/auth/registro",
	},
	providers: [
		Credentials({
			async authorize(credentials) {
				const parsedCredentials = z
					.object({
						email: z.string().email("Email Invalido").min(5),
						password: z.string().min(4).min(1, "Contraseña requerida"),
					})
					.safeParse(credentials)

				if (!parsedCredentials.success) return null

				const { email, password } = parsedCredentials.data

				const user = await prisma.user.findUnique({
					where: { email: email.toLowerCase() },
				})

				if (!user) return null
				if (!bcrypt.compareSync(password, user.password)) return null

				const { password: _, ...rest } = user

				return user
			},
		}),
	],
})
