import { useState, KeyboardEvent } from 'react'
import * as C from './styles'

type Props = {
    onEnter: (taskName: string)=>void
}

export const AddArea = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState(''); // cria um state

    const handleKeyUp = (e:KeyboardEvent)=>{ //evento do teclado
        if(e.code === 'Enter' && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    }
    return (
        <C.Container >
            <div className="image">➕</div>
            <input 
                type="text"
                placeholder="Adicione uma tarefa"
                value={inputText}
                onChange={e=>setInputText(e.target.value)} //vai capturar o texto e vai alterar na variavel
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    )
}