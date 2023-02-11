const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('search')
})

router.post('/', async (req, res)=>{
    
    const searchName = req.body.name;
    const url = `https://www.cheapshark.com/api/1.0/games?title=${searchName}&limit=60&exact=0`; // &steamAppID=35140
    await fetch(url)
        .then( response => response.json() )
            .then(data => { 
                if(data.length === 0 || data === undefined)
                    res.render('error', { data })
                res.render('show', {data, searchName}) 
            })
        .catch( err => res.render('error') )
})

module.exports = router