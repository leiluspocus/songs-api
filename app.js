const express = require('express')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const app = express()
const port = 8888

app.get('/songs', async (req, res) => {
  /*  await prisma.Song.create({
    data: {
      title: 'The show must go on',
      artist: 'Queen',
    },
  })*/

  const songs = await prisma.Song.findMany()
  console.log(songs)
  res.json({ status: 'ok!', artist: songs[0].artist, titre: songs[0].title })
})

app.get('/', async (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.set('view engine', 'pug')

app.all('*', (req, res) => {
  res.status(404).send('')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
