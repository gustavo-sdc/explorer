import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'

import { Container, Form } from './style'
import { Button } from '../../components/Button'
import { api } from '../../services/api'

export function New(){
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [observ, setObserv] = useState("")
    
    const [link, setLink] = useState([])
    const [newLink, setNewLink] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    function handleBack(){
        navigate(-1)
    }    

    function handleAddLink(){
        setLink(prevState => [...prevState, newLink])
        setNewLink("")
    }

    function handleRemoveLink(deleted){
        setLink(prevState => prevState.filter(link => link !== deleted))
    }

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tags => tags !== deleted))
    }

    async function handleNewNote(){
        if(newLink){
            return alert("Ops! Você esqueceu de adicionar um link...")
        }
        if(newTag){
            return alert("Ops! Você esqueceu de adicionar uma tag...")
        } 

        api.post("/notes", {
            title,
            description: observ,
            tags,
            links: link
        })

        alert("Nota criada com sucesso")
        navigate(-1)
    }

    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <ButtonText
                            title="Voltar"
                            onClick={handleBack}
                        />
                    </header>

                    <Input 
                        placeholder="Título"
                        onChange ={e => setTitle(e.target.value)}    
                    />
                    <TextArea 
                        placeholder="Observações"
                        onChange={e => setObserv(e.target.value)}    
                    />

                    <Section title="Links úteis">
                        {
                            link.map((link, index)=>(
                                <NoteItem
                                    key={String(index)}
                                    value={link}
                                    onClick={() => handleRemoveLink(link)}
                                />        
                            ))
                        }
                        <NoteItem 
                            isNew
                            placeholder="Novo link"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />      
                    </Section>

                    <Section title="Marcadores">
                        <div className='tags'>
                            {
                                tags.map((tag, index)=>(
                                    <NoteItem 
                                        key={String(index)}
                                        value={tag}
                                        onClick={()=> handleRemoveTag(tag)}
                                    />
                                ))
                            }

                            <NoteItem 
                                isNew 
                                placeholder="Nova tag"
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTag}
                                value={newTag}
                            ></NoteItem>
                        </div>
                    </Section>

                    <Button 
                        title="Salvar" 
                        onClick={handleNewNote}
                    />
                </Form>
            </main>
        </Container>
    )
}