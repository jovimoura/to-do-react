import { useState } from 'react';
import * as C from './App.styles' //Importando tudo como C de app.styles
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';
import { ListFormat } from 'typescript';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'comprar pão', done: false},
    {id: 2, name: 'comprar carro', done: false}
  ])

  const handleAddTask = (taskName:string)=>{
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item,index)=>(
          <ListItem key={index} item={item} /> 
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;