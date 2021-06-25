import React, { useState } from 'react'
import {
  // Input,
  Button,
  // Textarea,
  // CheckboxToggle,
  Select,
  // RadioGroup,
  // Notification,
  // RenderIf
} from 'react-rainbow-components'

const options = [
  { value: 'Small', label: 'Small' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Large', label: 'Large' }
]

const lifeOptions = [
  { value: '0-5 Years', label: '0-5 Years' },
  { value: '5-15 Years', label: '5-15 Years' },
  { value: 'Life-long', label: 'Life-long' }
]

const PetQuizPage = () => {
  // const [submited, setSubmited] = useState(false)
  const [suggestedPet, setSuggestedPet] = useState({
    pet: '',
    text: ''
  })

  const [answers, setAnswers] = useState({
    travels: false,
    wantCuddly: false,
    highEnergy: false,
    lifeSpan: '0-5 Years',
    wantTankOrCage: false,
    intelligentPet: false,
    whatSize: 'Small',
    wantScary: false,
    wantQuiet: false,
    easyToCare: false,
    backyard: false,
    feedLiveAnimals: false
  })

  const handleSizeChange = (e) => {
    setAnswers({ ...answers, whatSize: e.target.value })
  }

  const handleLifeSpanChange = (e) => {
    setAnswers({ ...answers, lifeSpan: e.target.value })
  }
  console.log(answers)

  const handleSubmit = () => {
    if (
      answers.travels === true &&
      answers.wantQuiet === true &&
      answers.wantTankOrCage === true &&
      answers.whatSize === 'Small' &&
      answers.lifeSpan !== 'Life-long'
    ) {
      setSuggestedPet({
        pet: 'A Lizard!',
        text: 'We recommend you looking into getting a lizard! There are many cool lizards from Bearded Dragons to Uromastyx. Lizards are typicaly easy to care for and they can even be left alone for a few days if you go out of town! They live in their own tank, but you can take them out and hold them if you want. Check out "Reptile" in our Browse pets tab.'
      })
    } else if (
      answers.lifeSpan === '0-5 Years' &&
      answers.wantTankOrCage === true &&
      answers.intelligentPet === false &&
      answers.whatSize === 'Small' &&
      answers.easyToCare === true
    ) {
      setSuggestedPet({
        pet: 'A Rodent!',
        text: 'We recommend you looking into getting a Rodent! Hamsters, Guinea Pigs, and Rabbits! Rodents sure are cute! With there shorter life spans and easy care, rodents make exellent starter pets for children, or anyone looking to have a cute pet in their life! Check out our "Rodent" page in our Browe Pets tab.'
      })
    } else if (
      answers.backyard === true &&
      answers.wantTankOrCage === false &&
      answers.highEnergy === true &&
      answers.lifeSpan === '5-15 Years' &&
      answers.easyToCare === false
    ) {
      setSuggestedPet({
        pet: 'A Dog!',
        text: 'Everyone loves dogs! They do not call them mans best friend for nothing. There are so many cool dog breeds like our mascot the Golden Retriever. Check them out on our "Canine" page in our Browse Results tab!'
      })
    } else if (
      answers.wantCuddly === true &&
      answers.wantTankOrCage === false &&
      answers.lifeSpan === '5-15 Years' &&
      answers.easyToCare === false
    ) {
      setSuggestedPet({
        pet: 'A Cat!',
        text: 'Cats are cool! These cuddly guys are great for anyone looking for a companion. Check out our "Feline" section in our Browse Pets tab.'
      })
    } else if (
      answers.intelligentPet === true &&
      answers.lifeSpan === 'Life-long' &&
      answers.easyToCare === false
    ) {
      setSuggestedPet({
        pet: 'A Bird!',
        text: 'Birds are neat! Birds are very intelligent pets, and there long life span makes them great life long pets! Check out our "Bird" section in our Browse Pets tab.'
      })
    } else if (answers.wantScary === true && answers.feedLiveAnimals) {
      setSuggestedPet({
        pet: 'A Snake!',
        text: 'Snakes are awesome pets to have! npm ? Then you should look into getting a pet bug and totally scare your friends! Sheck out our "Bug" section in our Browse Pets tab.'
      })
    } else if (answers.wantScary === true) {
      setSuggestedPet({
        pet: 'A Bug!',
        text: 'Bugs make cool pets! Has the idea of a pet Tarantula or Scorpion inticed you? Then you should look into getting a pet bug and totally scare your friends! Sheck out our "Bug" section in our Browse Pets tab.'
      })
    } else {
      setSuggestedPet({
        pet: 'A Fish!',
        text: 'We recommend you get a fish! Fish can be pretty easy to take care of, but as you get more skilled as a fish owner you can get some really cool looking breeds. Check out our "Fish" page in our Browse Page.'
      })
    }
  }

  return (
    <div className="quizpage">
      <div
       className="question">
        <h3>Do you want a pet that is easy to care for?</h3>
        <button 
          className="answer"
          style={{
            backgroundColor: `${answers.easyToCare ? 'lightgray' : 'dodgerblue'}`
          }}
          onClick={() => {
            setAnswers({ ...answers, easyToCare: false })
}
        }
        >
          no
        </button>
        <button 
          className="answer"
          style={{
            backgroundColor: `${answers.easyToCare ? 'dodgerblue' : 'lightgray'}`
          }}
          onClick={() => {
            setAnswers({ ...answers, easyToCare: true })
          }}
        >
          yes
        </button>
      </div>
      {/*       

       */}
      <div
       className="question">
        <h3>Do you travel often?</h3>
        <button 
          className="answer"
          style={{
            backgroundColor: `${answers.travels ? 'lightgray' : 'dodgerblue'}`
          }}
          onClick={() => {
            setAnswers({ ...answers, travels: false })
          }}
        >
          no
        </button>
        <button 
          className="answer"
          style={{
            backgroundColor: `${answers.travels ? 'dodgerblue' : 'lightgray'}`
          }}
          onClick={() => {
            setAnswers({ ...answers, travels: true })
          }}
        >
          yes
        </button>
      </div>
      {/*       

       */}
      <div
       className="question">
        <h3>Do you need to be able to cuddle your pet?</h3>
        <button 
          className="answer"
          style={{
            backgroundColor: `${answers.wantCuddly ? 'lightgray' : 'dodgerblue'}`
          }}
          onClick={() => {
            setAnswers({ ...answers, wantCuddly: false })
          }}
        >
          no
        </button>
        <button 
          className="answer"
          style={{
            backgroundColor: `${answers.wantCuddly ? 'dodgerblue' : 'lightgray'}`
          }}
          onClick={() => {
            setAnswers({ ...answers, wantCuddly: true })
          }}
        >
          yes
        </button>
      </div>
      {/*       

       */}
      <div
       className="question">
        <h3>Do you want your pet to have free roam of your house?</h3>
        <button 
          className="answer"
          style={{
            backgroundColor: `${answers.wantTankOrCage ? 'dodgerblue' : 'lightgray'}`
          }}
          onClick={() => {
            setAnswers({ ...answers, wantTankOrCage: true })
          }}
        >
          no
        </button>
        <button 
          className="answer"
          style={{
            backgroundColor: `${answers.wantTankOrCage ? 'lightgray' : 'dodgerblue'}`
          }}
          onClick={() => {
            setAnswers({ ...answers, wantTankOrCage: false })
          }}
        >
          yes
        </button>
      </div>
      {/*       


       */}
      <div
       className="question">
        <h3>Want to teach your pet tricks?</h3>
        <button 
          className="answer"
          style={{
            backgroundColor: `${answers.intelligentPet ? 'lightgray' : 'dodgerblue'}`
          }}
          onClick={() => {
            setAnswers({ ...answers, intelligentPet: false })
          }}
        >
          no
        </button>
        <button 
          className="answer"
          style={{
            backgroundColor: `${answers.intelligentPet ? 'dodgerblue' : 'lightgray'}`
          }}
          onClick={() => {
            setAnswers({ ...answers, intelligentPet: true })
          }}
        >
          yes
        </button>
      </div>
      {/*       

       */}
      <div
       className="question">
        <h3>Do you value a quiet home?</h3>
        <button 
          className="answer"
          style={{
            backgroundColor: `${answers.wantQuiet ? 'lightgray' : 'dodgerblue'}`
          }}
          onClick={() => {
            setAnswers({ ...answers, wantQuiet: false })
          }}
        >
          no
        </button>
        <button 
          className="answer"
          style={{
            backgroundColor: `${answers.wantQuiet ? 'dodgerblue' : 'lightgray'}`
          }}
          onClick={() => {
            setAnswers({ ...answers, wantQuiet: true })
          }}
        >
          yes
        </button>
      </div>
      {/*       

       */}
      <div
       className="question">
        <h3>Does the idea of feeding a live animal upset you?</h3>
        <button 
          className="answer"
          style={{
            backgroundColor: `${answers.feedLiveAnimals ? 'lightgray' : 'dodgerblue'}`
          }}
          onClick={() => {
            setAnswers({ ...answers, feedLiveAnimals: false })
          }}
        >
          no
        </button>
        <button 
          className="answer"
          style={{
            backgroundColor: `${answers.feedLiveAnimals ? 'dodgerblue' : 'lightgray'}`
          }}
          onClick={() => {
            setAnswers({ ...answers, feedLiveAnimals: true })
          }}
        >
          yes
        </button>
      </div>
      {/*       

       */}
      <div
       className="question">
        <h3>Do you want an energetic pet?</h3>
        <button 
          className="answer"
          style={{
            backgroundColor: `${answers.highEnergy ? 'lightgray' : 'dodgerblue'}`
          }}
          onClick={() => {
            setAnswers({ ...answers, highEnergy: false })
          }}
        >
          no
        </button>
        <button 
          className="answer"
          style={{
            backgroundColor: `${answers.highEnergy ? 'dodgerblue' : 'lightgray'}`
          }}
          onClick={() => {
            setAnswers({ ...answers, highEnergy: true })
          }}
        >
          yes
        </button>
      </div>
      {/*       

       */}
      <div
       className="question">
        <h3>Do you have a back yard?</h3>
        <button 
          className="answer"
          style={{
            backgroundColor: `${answers.backyard ? 'lightgray' : 'dodgerblue'}`
          }}
          onClick={() => {
            setAnswers({ ...answers, backyard: false })
          }}
        >
          no
        </button>
        <button 
          className="answer"
          style={{
            backgroundColor: `${answers.backyard ? 'dodgerblue' : 'lightgray'}`
          }}
          onClick={() => {
            setAnswers({ ...answers, backyard: true })
          }}
        >
          yes
        </button>
      </div>
      {/*       

       */}
      <div
       className="question">
        <h3>Do you want a pet that will creep out your mom?</h3>
        <button 
          className="answer"
          style={{
            backgroundColor: `${answers.wantScary ? 'lightgray' : 'dodgerblue'}`
          }}
          onClick={() => {
            setAnswers({ ...answers, wantScary: false })
          }}
        >
          no
        </button>
        <button 
          className="answer"
          style={{
            backgroundColor: `${answers.wantScary ? 'dodgerblue' : 'lightgray'}`
          }}
          onClick={() => {
            setAnswers({ ...answers, wantScary: true })
          }}
        >
          yes
        </button>
      </div>
      {/*       

       */}
      <Select
        options={options}
        labelAlignment="center"
        value={answers.size}
        onChange={handleSizeChange}
        label="How big a pet of a pet do you want?"
        orientation="horizontal"
      />
      <Select
        options={lifeOptions}
        labelAlignment="center"
        value={answers.lifeSpan}
        onChange={handleLifeSpanChange}
        label="how long of a life span do you want your pet to have?"
        orientation="horizontal"
      />
      <Button onClick={() => handleSubmit()}>submit</Button>
      <div className="quizresult">
        <div className="quizresult-pet">{suggestedPet.pet}</div>
        <div className="quizresult-text">{suggestedPet.text}</div>
      </div>
    </div>
  )
}

export default PetQuizPage
