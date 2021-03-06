import React from 'react'

import { FiArrowRight } from 'react-icons/fi'
import { FaSpinner } from 'react-icons/fa'
import Container from '@material-ui/core/Container'

import { ArticlesContainer, ArticleBox, ArticleStatus, ArticleHeader, ArticleBody, ArticleFooter, AuditButton } from './styles'

import Header from '../../components/Header'

export default function Audit () {
  return (
    <>
      <Header textPage="Artigos" />
      <Container maxWidth="lg">
        <ArticlesContainer>

          {[
            { status: <FaSpinner />, bgcolor: '#fb0' },
            { status: <FaSpinner />, bgcolor: '#fb0' },
            { status: <FaSpinner />, bgcolor: '#fb0' },
            { status: <FaSpinner />, bgcolor: '#fb0' }
          ].map((item, index) => (
            <ArticleBox key={index}>
              <ArticleHeader>
                <ArticleStatus bgcolor={item.bgcolor}>{item.status}</ArticleStatus>
                <div>
                  <strong>Keywords</strong>
                  <span>subkeywords</span>
                </div>
              </ArticleHeader>

              <ArticleBody>
                <div className="group">
                  <div><strong>Redator:</strong> Alisson</div>
                  <div><strong>Criador:</strong> Alisson de Andrade Araújo</div>
                </div>
                <div className="group">
                  <div><strong>Assumido:</strong> 31/03/2020 às 10:30</div>
                  <div><strong>Entregue:</strong> 31/03/2020 às 16:45</div>
                </div>
                <div><strong>Destino:</strong> www.teste.com.br</div>
              </ArticleBody>

              <ArticleFooter>
                <div className="values">
                  <strong>R$ 60,52</strong>
                  <span>1008 palavras</span>
                </div>
                <div className="audit">
                  <AuditButton>
                    Auditar
                    <FiArrowRight className="icon" size={20} />
                  </AuditButton>
                </div>
              </ArticleFooter>
            </ArticleBox>
          ))}

        </ArticlesContainer>
      </Container>
    </>
  )
}
