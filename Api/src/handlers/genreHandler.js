const { Genregames } = require('../db')
const {genreFilter} = require('../controllers/Videogames/getGenrefilter')
const genreHandler = async (req, res) => {

    try {
        listGenre = await Genregames.findAll()
        res.status(200).json(listGenre)
    } catch (error) { 
        res.status(400).json({ error: "no se encontraron generos" })
    }
}

const genreFilterHandler = async(req, res)=>{
    try {
        const listGenre = await genreFilter()
        res.status(200).json(listGenre)
    } catch (error) {
        res.status(400).json({ error: "no se encontraron generos" })

    }
}


module.exports = { genreHandler, genreFilterHandler }


