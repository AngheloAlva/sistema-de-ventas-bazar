import { z } from "zod"

export const loginSchema = z.object({
	email: z.string().email("Email Invalido").min(5),
	password: z.string().min(4).min(1, "Contraseña requerida"),
})
