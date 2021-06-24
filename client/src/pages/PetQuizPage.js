import React, { useState } from 'react'

const PetQuizPage = () => {
  const [submited, setSubmited] = useState(false)
  const [answers, setAnswers] = useState({
    travels: false,
    wantCuddly: false,
    highEnergy: false,
    lifeSpan: 'short',
    wantTankOrCage: false,
    intelligentPet: false,
    whatSize: 'Small',
    wantScary: false,
    wantQuiet: false,
    easyToCare: false,
    careAboutShedding: false,
    backyard: false,
    HouseOrApartment: 'Apartment',
    feedLiveAnimals: false,
    scaredOfBugs: false
  })

  console.log(answers)

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
    </div>
  )
}

export default PetQuizPage
