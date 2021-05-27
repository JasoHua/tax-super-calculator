import {React, useState} from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import calculateTax from './calculateTax'

export default function App() {
  const superRate = 0.095
  const [income, setIncome] = useState('')


  function round2dp(num) {
    return Math.round(num * 100) / 100
  }


  return (
    <div>
      <Container fixed>
        <h1>Tax & Super Calculator</h1>
        <TextField
            id="outlined-number"
            label="Income"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={e => setIncome(e.target.value)}
          />
          <h3>Tax Amount: ${round2dp(calculateTax(income))}</h3>
          <h3>Super Annuation: ${round2dp(income * superRate)} </h3>
          <h3>Income after taxation: ${round2dp(income - calculateTax(income))}</h3>
          <h3>Income after taxation + super: ${round2dp(income - calculateTax(income) + (income * superRate))}</h3>

          <span>Everything rounded to 2dp</span>
        </Container>
            
    </div>
  )
}
