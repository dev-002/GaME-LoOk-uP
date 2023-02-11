const { rejects } = require('assert')
const { response } = require('express')
const express = require('express')
const { resolve } = require('path')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('search')
})

router.post('/', async (req, res)=>{
    
    const url = `https://www.cheapshark.com/api/1.0/games?title=${req.body.name}&limit=60&exact=0`; // &steamAppID=35140
    await fetch(url)
        .then( response => response.json() )
            .then(data => { 
                if(data.length === 0 || data === undefined)
                    res.send('No data found')
                res.send(data) 
            })
        .catch( err => {
            console.log(err);
            res.send(err)
        })
})

module.exports = router