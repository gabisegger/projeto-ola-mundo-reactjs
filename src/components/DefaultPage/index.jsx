import React from 'react'
import Banner from '../Banner'
import { Outlet } from 'react-router-dom'

export default function DefaultPage() {
  return (
    <main>
      <Banner/>
      {/* Renderizar conteúdo da rota aqui... */}
      <Outlet/>
    </main>
  )
}
