import React, { useState } from 'react'
import { Button, Select, Modal } from 'react-rainbow-components'

import reptiles from '../styles/images/reptiles.png'
import amphibians from '../styles/images/amphibians.png'
import birds from '../styles/images/birds.png'
import felines from '../styles/images/felines.png'
import canines from '../styles/images/canines.png'
import bugs from '../styles/images/bugs.png'
import rodents from '../styles/images/rodents.png'
import weasels from '../styles/images/weasels.png'
import fish from '../styles/images/fish.png'
import other from '../styles/images/other.png'

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
  const [isOpen, setIsOpen] = useState(false)
  const [suggestedPet, setSuggestedPet] = useState({
    pet: '',
    text: '',
    img: ''
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
    if (answers.wantScary === true && answers.feedLiveAnimals) {
      setSuggestedPet({
        pet: 'A Snake!',
        text: 'Snakes make some of the best pets. Do you enjoy quiet during the day and night ? then a snake is for you. Snakes also require minimal clean up they shed their skin and cleaning the enclosure is quite easy ! With their easy maintenance and social qualities (they enjoy being held) the snake is a great pet for all to enjoy.',
        img: `${reptiles}`
      })
    } else if (answers.wantScary === true) {
      setSuggestedPet({
        pet: 'A Bug!',
        text: 'Thats right BUGS are on the list of pets to own. You may think why. Bugs are a low maintenance, easy to feed and most of all quiet. The animals in this category make great starter pets since all the qualities listed make them easy to take of for all ages. One thing to note. Always be gentle when handling these fascinating creatures.',
        img: `${bugs}`
      })
    } else if (
      answers.travels === true &&
      answers.wantQuiet === true &&
      answers.wantTankOrCage === true &&
      answers.whatSize === 'Small' &&
      answers.lifeSpan !== 'Life-long' &&
      answers.wantCuddly === false
    ) {
      setSuggestedPet({
        pet: 'A Lizard!',
        text: 'The lizard is part of the reptile class and with this being said are an animal that is quite easy to care for. An added bonus on these little guys is that they will lead to few allergies as they don’t have dander. These quite, easy to maintain, and hypo allergenic animals are a great pet for all ages.',
        img: `${reptiles}`
      })
    } else if (
      answers.lifeSpan === '0-5 Years' &&
      answers.wantTankOrCage === true &&
      answers.intelligentPet === false &&
      answers.whatSize === 'Small' &&
      answers.easyToCare === true &&
      answers.wantCuddly === true
    ) {
      setSuggestedPet({
        pet: 'A Rodent!',
        text: 'The simple starter pet that classrooms across the globe all start off with for children to enjoy and learn the fundamentals. Regardless of what particular type of animal you choose from in the rodent family, you and anyone else will enjoy. The upkeep of cages and enclosures are minimal with changing of bedding. Feedings are regimented and schedule and will teach all those involved the importance of keeping time. Some of these little ones enjoy being held as well. Rodents make a great pet',
        img: `${rodents}`
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
        text: 'The Dog. Where to begin. Their are countless breeds of dog to choose from to be able to suit your needs as a future dog owner. There are big dogs, little dogs, fluffy dogs (like or mascot the Golden Retriever) and non fluffy. All these different attributes will definitely help you in determining the pet for you. Dogs are a loyal companion who require lots of love and attention. They will grow into your lives and become apart of all aspects of who you are.',
        img: `${canines}`
      })
    } else if (
      answers.wantCuddly === true &&
      answers.wantTankOrCage === false &&
      answers.lifeSpan === '5-15 Years' &&
      answers.easyToCare === false
    ) {
      setSuggestedPet({
        pet: 'A Cat!',
        text: 'The infamous Cat. With many breeds to choose from finding the cat for you based on personality and qualities you want is a breeze. With that in mind the Sphinx is hairless so no worry to Dander if you are allergic. The cat makes a great animal to own as a pet. With its ability to be affectionate and its qualities of independence, the cat is a great addition to any home.',
        img: `${felines}`
      })
    } else if (
      answers.intelligentPet === true &&
      answers.lifeSpan === 'Life-long' &&
      answers.easyToCare === false &&
      answers.wantQuiet === false
    ) {
      setSuggestedPet({
        pet: 'A Bird!',
        text: 'Bird are extremely intelligent and easy to train, These aspects alone make this pet a fun one to own. Birds are a social animal as well so keep up the training as they love to learn more and more. With all these qualities Birds are some of the most unique pets out there. They will forever be interesting to own, watch and be around. Birds are long-lived, easy to maintain, easy to feed and clean. They make the perfect friend',
        img: `${birds}`
      })
    } else {
      setSuggestedPet({
        pet: 'A Fish!',
        text: 'A beautiful aquarium lined with plants and fish, fish are a great addition to any home for the whole family to enjoy. With feedings and somewhat minimal maintenance (cleaning tanks is a task but once gotten down are easy to do) the whole family can sit around and enjoy the wonders of having an aquarium.',
        img: `${fish}`
      })
    }
    setIsOpen(true)
  }

  const handleOnClose = () => {
    setIsOpen(false)
  }

  return (
    <div
      className="quizpage"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'Center' }}
    >
      <div
        className="question"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'Center'
        }}
      >
        <h3>Do you want a pet that is easy to care for?</h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className="answer"
            style={{
              backgroundColor: `${
                answers.easyToCare ? 'lightgray' : 'dodgerblue'
              }`
            }}
            onClick={() => {
              setAnswers({ ...answers, easyToCare: false })
            }}
          >
            no
          </button>
          <button
            className="answer"
            style={{
              backgroundColor: `${
                answers.easyToCare ? 'dodgerblue' : 'lightgray'
              }`
            }}
            onClick={() => {
              setAnswers({ ...answers, easyToCare: true })
            }}
          >
            yes
          </button>
        </div>
      </div>
      {/*       

       */}
      <div
        className="question"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'Center'
        }}
      >
        <h3>Do you travel often?</h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
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
      </div>
      {/*       

       */}
      <div
        className="question"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'Center'
        }}
      >
        <h3>Do you need to be able to cuddle your pet?</h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className="answer"
            style={{
              backgroundColor: `${
                answers.wantCuddly ? 'lightgray' : 'dodgerblue'
              }`
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
              backgroundColor: `${
                answers.wantCuddly ? 'dodgerblue' : 'lightgray'
              }`
            }}
            onClick={() => {
              setAnswers({ ...answers, wantCuddly: true })
            }}
          >
            yes
          </button>
        </div>
      </div>
      {/*       

       */}
      <div
        className="question"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'Center'
        }}
      >
        <h3>Do you want your pet to have free roam of your house?</h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className="answer"
            style={{
              backgroundColor: `${
                answers.wantTankOrCage ? 'dodgerblue' : 'lightgray'
              }`
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
              backgroundColor: `${
                answers.wantTankOrCage ? 'lightgray' : 'dodgerblue'
              }`
            }}
            onClick={() => {
              setAnswers({ ...answers, wantTankOrCage: false })
            }}
          >
            yes
          </button>
        </div>
      </div>
      {/*       


       */}
      <div
        className="question"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'Center'
        }}
      >
        <h3>Want to teach your pet tricks?</h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className="answer"
            style={{
              backgroundColor: `${
                answers.intelligentPet ? 'lightgray' : 'dodgerblue'
              }`
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
              backgroundColor: `${
                answers.intelligentPet ? 'dodgerblue' : 'lightgray'
              }`
            }}
            onClick={() => {
              setAnswers({ ...answers, intelligentPet: true })
            }}
          >
            yes
          </button>
        </div>
      </div>
      {/*       

       */}
      <div
        className="question"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'Center'
        }}
      >
        <h3>Do you value a quiet home?</h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className="answer"
            style={{
              backgroundColor: `${
                answers.wantQuiet ? 'lightgray' : 'dodgerblue'
              }`
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
              backgroundColor: `${
                answers.wantQuiet ? 'dodgerblue' : 'lightgray'
              }`
            }}
            onClick={() => {
              setAnswers({ ...answers, wantQuiet: true })
            }}
          >
            yes
          </button>
        </div>
      </div>
      {/*       

       */}
      <div
        className="question"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'Center'
        }}
      >
        <h3>Are you ok with the idea of feeding your pet a live animal?</h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className="answer"
            style={{
              backgroundColor: `${
                answers.feedLiveAnimals ? 'lightgray' : 'dodgerblue'
              }`
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
              backgroundColor: `${
                answers.feedLiveAnimals ? 'dodgerblue' : 'lightgray'
              }`
            }}
            onClick={() => {
              setAnswers({ ...answers, feedLiveAnimals: true })
            }}
          >
            yes
          </button>
        </div>
      </div>
      {/*       

       */}
      <div
        className="question"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'Center'
        }}
      >
        <h3>Do you want an energetic pet?</h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className="answer"
            style={{
              backgroundColor: `${
                answers.highEnergy ? 'lightgray' : 'dodgerblue'
              }`
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
              backgroundColor: `${
                answers.highEnergy ? 'dodgerblue' : 'lightgray'
              }`
            }}
            onClick={() => {
              setAnswers({ ...answers, highEnergy: true })
            }}
          >
            yes
          </button>
        </div>
      </div>
      {/*       

       */}
      <div
        className="question"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'Center'
        }}
      >
        <h3>Do you have a back yard?</h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className="answer"
            style={{
              backgroundColor: `${
                answers.backyard ? 'lightgray' : 'dodgerblue'
              }`
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
              backgroundColor: `${
                answers.backyard ? 'dodgerblue' : 'lightgray'
              }`
            }}
            onClick={() => {
              setAnswers({ ...answers, backyard: true })
            }}
          >
            yes
          </button>
        </div>
      </div>
      {/*       

       */}
      <div
        className="question"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'Center'
        }}
      >
        <h3>Do you want a pet that will creep out your mom?</h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className="answer"
            style={{
              backgroundColor: `${
                answers.wantScary ? 'lightgray' : 'dodgerblue'
              }`
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
              backgroundColor: `${
                answers.wantScary ? 'dodgerblue' : 'lightgray'
              }`
            }}
            onClick={() => {
              setAnswers({ ...answers, wantScary: true })
            }}
          >
            yes
          </button>
        </div>
      </div>
      {/*       

       */}
      <h3>How big a pet of a pet do you want?</h3>
      <Select
        options={options}
        labelAlignment="center"
        value={answers.size}
        onChange={handleSizeChange}
        style={{ width: '20vw' }}
        orientation="horizontal"
      />
      <h3>how long of a life span do you want your pet to have?</h3>
      <Select
        options={lifeOptions}
        labelAlignment="center"
        value={answers.lifeSpan}
        onChange={handleLifeSpanChange}
        style={{ width: '20vw' }}
        orientation="horizontal"
      />
      <Button onClick={() => handleSubmit()}>submit</Button>

      <Modal id="modal-1" isOpen={isOpen} onRequestClose={handleOnClose}>
        <div className="quizresult" style={{ textAlign: 'center' }}>
          <div className="quizresult-pet">{suggestedPet.pet}</div>
          <img src={suggestedPet.img} style={{ width: '100%' }} />
          <div className="quizresult-text">{suggestedPet.text}</div>
        </div>
      </Modal>
    </div>
  )
}

export default PetQuizPage
