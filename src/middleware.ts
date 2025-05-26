// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const middleware = (request: NextRequest) => {
	// Redireciona todas as rotas não permitidas para a home
	return NextResponse.redirect(new URL("/", request.url))
}

// Configuração para ignorar rotas estáticas e APIs
export const config = {
	matcher: [
		// Ignora:
		// - API routes
		// - Arquivos estáticos (/_next/static, /_next/image, /favicon.ico, etc.)
		// - A própria rota raiz (/)
		"/((?!api|_next/static|_next/image|favicon.ico|$).*)"
	]
}
