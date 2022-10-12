import { Box } from '@mui/material'
import type { NextPage } from 'next'
import List from '../src/components/List/List'
import { Teacher } from '../src/@types/teacher'

const Home: NextPage = () => {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Professor 1",
      photo: "https://github.com/guitotti.png",
      description: "Descrição do Professor 1",
      price_hour: 100
    },
    {
      id: 2,
      name: "Professor 2",
      photo: "https://github.com/guitotti.png",
      description: "Descrição do Professor 2",
      price_hour: 100
    },
    {
      id: 3,
      name: "Professor 3",
      photo: "https://github.com/guitotti.png",
      description: "Descrição do Professor 3",
      price_hour: 100
    }

  ]

  return (
    <Box sx={{ backgroundColor: 'secondary.main'}}>
      <List teachers={teachers}></List>
    </Box>
  )
}

export default Home
