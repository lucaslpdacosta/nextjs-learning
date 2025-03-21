import Link from "next/link"

export default function Notfound() {
  return(
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center font-bold mt-9 text-6xl">404 - Página não encontrada</h1>
      <p>Esta página não existe.</p>
      <Link href='home'>
        Voltar Para Home
      </Link>
    </div>
  )
}