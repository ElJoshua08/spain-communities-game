import Link from "next/link";

export default function PlayPage() {
  return (
    <div>
      En que dificultad quieres jugar?

      <Link href="/jugar/facil">Fácil</Link>
      <Link href="/jugar/medio">Medio</Link>
      <Link href="/jugar/dificil">Difícil</Link>
    </div>
  )
}