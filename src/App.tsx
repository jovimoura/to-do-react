import { useState } from 'react';
import * as C from './App.styles' //Importando tudo como C de app.styles
import { Item } from './types/item';
import { ListItem } from './components/ListItem';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'comprar pão', done: false},
    {id: 2, name: 'comprar carro', done: false}
  ])

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/*área de add nova tarefa*/}

        {list.map((item,index)=>(
          <ListItem key={index} item={item} /> 
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;