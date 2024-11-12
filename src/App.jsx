import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import { Watches } from './components/Watches'

function App() {
  const [watches, setWatches] = useState([]);

  const handleSubmitForm = (formData) => {
    if (!watches.find((elem)=> elem.city == formData.city && elem.offset == formData.offset))
      setWatches([...watches, formData]);
  }

  const handleClose = (event, index) => {
    const newWatches = watches.filter((_data,idx) => idx !== index).map(({city,offset})=>({city:city, offset:offset}));
    setWatches([...newWatches]);
  }

  return (
    <>
        <Form onSubmit={(event,formData) => {handleSubmitForm(formData)}}/>
          <Watches data={watches} handleClose={handleClose}/>
    </>
  )
}

export default App
