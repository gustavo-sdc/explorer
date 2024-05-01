import { Container, Links, Content } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tags"
import { ButtonText } from "../../components/ButtonText"

export function Details(){
  
  return(
    // Fragment não recebe nenhuma estilização, não tem nenhum impacto visual
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title="Excluir Nota"/>

          <h1>Introduçao ao React</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quia a non sint labore omnis obcaecati consectetur beatae maxime. 
            Rerum, magni maxime! Omnis nesciunt deserunt fugiat. 
            Quidem quam sed nulla dolore.
          </p>

          <Section title="Links úteis">
          
            <Links>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
            </Links>
      
          </Section>

          <Section title="Marcadores">
            <Tag title="node"/>
            <Tag title="express"/>
          </Section>

          <Button title="Voltar"/>

        </Content>
      </main>

    </Container>
  )
}