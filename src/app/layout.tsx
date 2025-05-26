import type { Metadata } from "next"
import { Inter, Unbounded } from "next/font/google"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import "./globals.css"

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter"
})

const unbounded = Unbounded({
	subsets: ["latin"],
	variable: "--font-unbounded"
})

export const metadata: Metadata = {
	title: "Curso de Desenho de Personagens com Gustavo Almeida e Filipe Emerson.",
	description:
		"Aprenda a criar personagens marcantes com técnicas profissionais, fundamentos sólidos e ferramentas além do Photoshop. Domine o planejamento, acelere seu processo criativo e eleve seu portfólio. +10 horas de conteúdo com acesso vitalício!"
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<html lang="pt-BR">
			<body className={`${unbounded.className} ${inter.variable} antialiased`}>
				<Header />
				<main className="container mx-auto">{children}</main>
				<Footer />
			</body>
		</html>
	)
}

export default RootLayout
