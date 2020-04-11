import React from 'react'

import Container from '@material-ui/core/Container'

import { LastAcess, News, ContainerNews, BoxNews } from './styles'

import Header from '../../components/Header'

export default function Home () {
  return (
    <>
      <Header textPage="Home" />
      <Container maxWidth="lg">
        <LastAcess>
          <h1>Último acesso</h1>
          <div className="box">
            <div><span>Quando:</span><strong>11/04/2020 11:09:08</strong></div>
            <div><span>Duração:</span><strong>37 minutos e 20 segundos</strong></div>
            <div><span>Local:</span><strong>123.841.107.5234</strong></div>
          </div>
        </LastAcess>
        <News>
          <h1>Novidades</h1>
          <p>Está no ar a versão <span className="version">1.25.18</span>, com correções, melhorias e algumas novidades que você pode conferir a baixo.</p>
          <ContainerNews>
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <BoxNews key={index}>
                <div className="box">
                  <div>Novidade 1</div>
                  <p>Testando.</p>
                </div>
              </BoxNews>
            ))}
          </ContainerNews>
        </News>
      </Container>
    </>
  )
}
