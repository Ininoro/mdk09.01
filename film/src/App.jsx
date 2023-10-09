import { useState } from 'react'
import './App.css'
import { Card } from './card'
import { Header } from './Header'

function App() {
  const [inputOne, setInputOne] = useState('')
  const [inputTwo, setInputTwo] = useState('')
  const [inputThree, setInputThree] = useState('')
  const [array, setArray] = useState([
    {
      film: 'Название фильма',
      rate: 4.7,
      desc: 'ну норм в принципе но я такое не люблю банальщина'
    },
    {
      film: 'Преступник',
      rate: 2,
      desc: 'я так и не узнал кто в конце был преступник'
    },
    {
      film: 'Последний день в Париже',
      rate: 1,
      desc: 'там вообще нет парижа лол вы где это снимали голову включите'
    },
    {
      film: 'Враг',
      rate: 5,
      desc: 'блин всем советую очень глубокий фильм жаль не все поймут в наше время'
    }
  ])
  return (
    <>
      <Header />
      <div className="container">
        <h1 className='new'>НОВИНКИ</h1>
        <input 
          onChange={(event) => setInputOne(event.target.value)} placeholder='Название фильма' />
        <input value={inputTwo}
          onChange={(event) => setInputTwo(event.target.value)} placeholder='Оценка' type="number" maxLength={1} />
        <input value={inputThree}
          onChange={(event) => setInputThree(event.target.value)} placeholder='Описание' />
        <button onClick={() => {
          setArray(prev => {
            return prev.concat({
              film: inputOne,
              rate: inputTwo,
              desc: inputThree
            })
          })
        }

        }>Отправить</button>
      </div>
      <div className="card_block">

        {
          array.map((item) => {
            return <Card film={item.film} rate={item.rate} desc={item.desc} />
          }
          )
        }
      </div>

    </>
  )
}

export default App