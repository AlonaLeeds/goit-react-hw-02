import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import Options from '../Options/Options';
import css from '../App/App.module.css'


export default  function App() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const []

  return (
    <>
      <div>
        <button onClick={handlePrev} >
         prev
        </button>
             <button onClick={handleNext}>
        next
        </button>
      </div>
      <p>0/0</p>
      <article>
        <h1>Topic</h1>
        <p>text</p>
      </article>
    </>
  )
}


