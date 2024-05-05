import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { Container, Form, Avatar } from "./style";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { useAuth } from '../../hooks/auth';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'


export function Profile(){
    const navigate = useNavigate()

    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [old_password, setOldPassword] = useState()
    const [password, setPassword] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [avatar, setAvatar] = useState(user.avatar)   
    const [avatarFile, setAvatarFile] = useState(null)

    function handleBack(){
        navigate(-1)
    }    

    async function handleUpdate(){
        const updated ={
            user: name,
            email,
            old_password,
            password
        }

        const userUpdated = Object.assign(user, updated)

        await updateProfile({ user: userUpdated, avatarFile })
        navigate(-1)
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return(
        <Container>
            <header>
                <button type='button' onClick={handleBack}>
                    <FiArrowLeft size={24}/>
                </button>
            </header>

            <Form>
                <Avatar>
                    <img 
                        src={avatarUrl}
                        alt="Foto do usuário" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera />
                        
                        <input 
                            id="avatar"
                            type="file"
                            onChange={handleChangeAvatar}
                        />
                    </label>
                </Avatar>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="email"
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                    onChange={e=> setOldPassword(e.target.value)}
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                    onChange={e=> setPassword(e.target.value)}
                />

                <Button title="Salvar" onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}