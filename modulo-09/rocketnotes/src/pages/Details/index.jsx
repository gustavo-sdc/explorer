import { Container, Links, Content } from "./styles"

import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tags"
import { ButtonText } from "../../components/ButtonText"
import { api } from "../../services/api"

export function Details(){
  const params = useParams()
  const navigate = useNavigate()

  const [data, setData] = useState(null)

  function handleBack(){
    navigate(-1)
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente excluir esta nota?")

    if(confirm){
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }

  }

  useEffect(()=>{
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  return(
    // Fragment não recebe nenhuma estilização, não tem nenhum impacto visual
    <Container>
      <Header />

      {
        data &&      
        <main>
        <Content>

          <ButtonText 
            title="Excluir Nota"
            onClick={handleRemove}
          />

          <h1>{data.title}</h1>

          <p>
            {data.description}
          </p>

          {data.links &&          
            <Section title="Links úteis">
            
              <Links>
                {
                  data.links.map( link => (
                    <li>
                      <a 
                        key={String(link.id)}
                        href={link.url}
                        target="_blank"
                      >
                        {link.url}
                      </a>
                    
                    </li>
                  ))
                }
              </Links>
        
            </Section>
          }
          
          { data.tags &&
            <Section title="Marcadores">
              {
                data.tags.map( tag =>{
                  <Tag 
                    key={String(tag.id)}
                    title={tag.name}
                  />
                })
              } 
            </Section>
          }
          <Button 
            title="Voltar"
            onClick={handleBack}  
          />

        </Content>
        </main>
      }

    </Container>
  )
}