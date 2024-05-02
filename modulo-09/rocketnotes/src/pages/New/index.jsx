import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'

import { Container, Form } from './style'
import { Button } from '../../components/Button'

export function New(){
    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input placeholder="Título"/>
                    <TextArea placeholder="Observações"/>

                    <Section title="Links úteis">
                        <NoteItem value="https://rocketseat.com.br"></NoteItem>
                        <NoteItem isNew placeholder="Novo link"></NoteItem>
                    </Section>

                    <Section title="Marcadores">
                        <div className='tags'>
                            <NoteItem value="react"></NoteItem>
                            <NoteItem isNew placeholder="Nova tag"></NoteItem>
                        </div>
                    </Section>

                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    )
}