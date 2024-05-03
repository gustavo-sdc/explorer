import { useState, useContext } from 'react';

import { Link } from 'react-router-dom'
import { FiMail, FiLock } from 'react-icons/fi'
import { Container, Form, Background } from "./style";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


export function SignIn(){
    const [ name, setName] = useState("")
    const [ email, setEmail] = useState("")
    const [ password, setPassword] = useState("")

    const data = useContext()

    return (
        <Container>
            <Form>
                <h1>
                    RocketSeat Notes
                </h1>

                <p>Aplicação para salver e gerenciar seus links úteis</p>

                <h2>Faça seu login</h2>

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setEmail(e.target.value)}
                />

                <Button title="Entrar"/>

                <Link to="/register">
                    Criar conta
                </Link>

            </Form>

            <Background/>
        </Container>
    )
}