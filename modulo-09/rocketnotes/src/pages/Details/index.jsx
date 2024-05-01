import { Fragment } from "react"
import { Container } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"

export function Details(){
  
  return(
    // Fragment não recebe nenhuma estilização, não tem nenhum impacto visual
    <Container>
      <Header />

      <Section link="Links úteis">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Section>

      <Button title="Voltar"/>
    </Container>
  )
}