import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProfilePage = (props) => {
  const [user, setUser] = useState({})

  const getUser = async () => {
    const res = await axios.get('')
    setUser(res)
  }

  useEffect(() => {
    getUser()
  })

  return <div></div>
}

export default ProfilePage
