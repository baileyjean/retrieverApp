import React, { useState } from 'react'
import {
  Input,
  Button,
  Textarea,
  CheckboxToggle,
  Select,
  RadioGroup,
  Notification,
  RenderIf
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
        text: 'We recommend you looking into getting a lizard! There are many cool lizards from Bearded Dragons to Uromastyx. Lizards are typicaly easy to care for and they can even be left alone for a few days if you go out of town! They live in their own tank, but you can take them out and hold them if you want. Check out "Reptile" in our Browse pets tab'
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
        text: 'We recommend you looking into getting a Rodent! Hamsters, Guinea Pigs, and Rabbits! Rodents sure are cute! With there shorter life spans and easy care, rodents make exellent starter pets for children, or anyone looking to have a cute pet in their life! Check out our "Rodent" page in our Browe Pets tab'
      })
      // } else if (
      //   answers.backyard === true &&
      //   answers.wantTankOrCage === false &&
      //   answers.highEnergy === false
      // ) {
      //   setSuggestedPet({
      //     pet: 'A Dog!',
      //     text: 'Whos'
      //   })
      // } else {
      setSuggestedPet({
        pet: 'A Fish!',
        text: 'We recommend you get a fish! Fish can be pretty easy to take care of, but as you get more skilled as a fish owner you can get some really cool looking breeds. Check out our "Fish" page in our Browse Page'
      })
    }
  }

  console.log(suggestedPet)

  return (
    <div>
      {/*       

       */}
      <div>
        Do you want a pet that is easy to care for?
        <div
          onClick={() => {
            setAnswers({ ...answers, easyToCare: false })
          }}
        >
          no
        </div>
        <div
          onClick={() => {
            setAnswers({ ...answers, easyToCare: true })
          }}
        >
          yes
        </div>
      </div>
      {/*       

       */}
      <div>
        Do you travel often?
        <div
          onClick={() => {
            setAnswers({ ...answers, travels: false })
          }}
        >
          no
        </div>
        <div
          onClick={() => {
            setAnswers({ ...answers, travels: true })
          }}
        >
          yes
        </div>
      </div>
      {/*       

       */}
      <div>
        Do you need to be able to cuddle your pet?
        <div
          onClick={() => {
            setAnswers({ ...answers, wantCuddly: false })
          }}
        >
          no
        </div>
        <div
          onClick={() => {
            setAnswers({ ...answers, wantCuddly: true })
          }}
        >
          yes
        </div>
      </div>
      {/*       

       */}
      <div>
        Do you want your pet to have free roam of your house?
        <div
          onClick={() => {
            setAnswers({ ...answers, wantTankOrCage: false })
          }}
        >
          no
        </div>
        <div
          onClick={() => {
            setAnswers({ ...answers, wantTankOrCage: true })
          }}
        >
          yes
        </div>
      </div>
      {/*       


       */}
      <div>
        Want to teach your pet tricks?
        <div
          onClick={() => {
            setAnswers({ ...answers, intelligentPet: false })
          }}
        >
          no
        </div>
        <div
          onClick={() => {
            setAnswers({ ...answers, intelligentPet: true })
          }}
        >
          yes
        </div>
      </div>
      {/*       

       */}
      <div>
        Do you value a quiet home?
        <div
          onClick={() => {
            setAnswers({ ...answers, wantQuiet: false })
          }}
        >
          no
        </div>
        <div
          onClick={() => {
            setAnswers({ ...answers, wantQuiet: true })
          }}
        >
          yes
        </div>
      </div>
      {/*       

       */}
      <div>
        Does the idea of feeding a live animal upset you?
        <div
          onClick={() => {
            setAnswers({ ...answers, wantQuiet: false })
          }}
        >
          no
        </div>
        <div
          onClick={() => {
            setAnswers({ ...answers, wantQuiet: true })
          }}
        >
          yes
        </div>
      </div>
      {/*       

       */}
      <div>
        Do you want an energetic pet?
        <div
          onClick={() => {
            setAnswers({ ...answers, highEnergy: false })
          }}
        >
          no
        </div>
        <div
          onClick={() => {
            setAnswers({ ...answers, highEnergy: true })
          }}
        >
          yes
        </div>
      </div>
      {/*       

       */}
      <div>
        Do you have a back yard?
        <div
          onClick={() => {
            setAnswers({ ...answers, backyard: false })
          }}
        >
          no
        </div>
        <div
          onClick={() => {
            setAnswers({ ...answers, backyard: true })
          }}
        >
          yes
        </div>
      </div>
      {/*       

       */}
      <div>
        Do you want a pet that will creep out your mom?
        <div
          onClick={() => {
            setAnswers({ ...answers, wantScary: false })
          }}
        >
          no
        </div>
        <div
          onClick={() => {
            setAnswers({ ...answers, wantScary: true })
          }}
        >
          yes
        </div>
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
    </div>
  )
}

export default PetQuizPage
