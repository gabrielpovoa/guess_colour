import { useState, useEffect } from 'react'
import { Header } from './components/header/Header'
import { generateRandomColor } from './functionServices/GenerateColor';
import { Button, Container, GuessMe, Options, Score } from './HomeSC'

const App = () => {
  const [color, setColour] = useState<string>('');
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<boolean | undefined>(undefined)
  const [score, setScore] = useState<number>(0)

  const GenerateColors = () => {
    const actualColor = generateRandomColor()
    setColour(actualColor)
    setAnswers([actualColor, generateRandomColor(), generateRandomColor()].sort(() => 0.6 - Math.random()))
  }
  useEffect(() => {
    GenerateColors()
  }, [])

  const handleAnswerClick = (item: string) => {
    if (item === color) {
      setScore(score+1)
      setResult(false)
      GenerateColors()
    } else {
      setResult(true)
    }
  }

  return <>
    <Header />
    <Score>
      <p>Score: </p> <span>{score}</span>
    </Score>
    <Container>
      <GuessMe style={{ backgroundColor: color }} ></GuessMe>
      <Options>
        {answers.map((item, index) => (
          <Button onClick={() => handleAnswerClick(item)} key={index}>{item}</Button>
        ))}
      </Options>
      {result === false && <div style={{ color: 'cornflowerblue', fontSize: '15px' }}>Damn! you're good 👾🤖</div>}
      {result === true && <div style={{ color: 'red', fontSize:'15px' }}>C'mon, I know you can do it🤖</div>}
    </Container>
  </>
}

export default App
