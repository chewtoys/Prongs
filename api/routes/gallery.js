const { Router } = require('express')
// require glob
const glob = require('glob')
// require cors
const cors = require('cors')

const router = Router()

router.get('/gallery/albums', cors(), function(req, res) {
  // initialize array for albums
  const albums = []
  // obtain names for albums
  const albumNames = glob.sync('*', { cwd: './contents/gallery' })
  // add cover image for each album
  let idx = 0
  albumNames.forEach(function(albumName) {
    // cover image has file name as *.cover.jpg(png|tiff|gif|jpeg)
    const albumCover = glob.sync(
      albumName + '/*.cover.@(jp?(e)g|png|tiff|gif)',
      { cwd: './contents/gallery' }
    )
    // add attribute name, cover, slug and id
    albums.push({
      name: albumName,
      cover: albumCover[0],
      slug: albumName,
      id: idx
    })
    idx += 1
  })
  res.json(albums)
})

router.get('/gallery/albums/:album', cors(), function(req, res) {
  const albumPhotos = []
  const albumPhotoNames = glob.sync(
    `${req.params.album}/*[!(min|placeholder)].@(jp?(e)g|png|tiff|gif)`,
    { cwd: 'contents/gallery/' }
  )
  let idx = 0
  albumPhotoNames.forEach(function(albumPhotoName) {
    albumPhotos.push({
      name: albumPhotoName,
      id: idx
    })
    idx += 1
  })
  res.json(albumPhotos)
})

module.exports = router
