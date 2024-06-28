"use server"

import { signIn } from "@/auth"
import { z } from "zod"
import { loginSchema } from "../lib/schemas/login"

export async function authenticate(formData: z.infer<typeof loginSchema>) {
	try {
		await signIn("credentials", {
			email: formData.email.toLowerCase(),
			password: formData.password,
			redirect: true,
			redirectTo: "/",
		})

		return "Inicio de sesión exitoso"
	} catch (error) {
		if ((error as Error).message.includes("CredentialsSignin")) {
			return "Credenciales inválidas"
		}

		return "Error desconocido"
	}
}

export const login = async (email: string, password: string) => {
	try {
		await signIn("credentials", { email: email.toLowerCase(), password })

		return { ok: true }
	} catch (error) {
		console.log(error)
		return { ok: false, message: "Error al iniciar sesión" }
	}
}
