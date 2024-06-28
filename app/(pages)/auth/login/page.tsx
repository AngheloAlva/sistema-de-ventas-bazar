import LoginForm from "@/app/components/auth/LoginForm"

export default function LoginPage(): React.ReactElement {
	return (
		<main className="flex flex-col items-center justify-center pt-10">
			<h1 className="text-center text-3xl font-bold">Iniciar sesión</h1>

			<div className="mt-10 w-full max-w-96 px-4">
				<LoginForm />
			</div>
		</main>
	)
}
