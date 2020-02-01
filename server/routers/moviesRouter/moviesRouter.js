const express = require('express');
// const pool = require('../modules/pool');
const axios = require('axios');
const router = express.Router();
const pool = require('../../modules/pool');

router.get('/', (req,res) => {
    let queryText = `SELECT * FROM "movies" ORDER BY "id"`
    pool.query(queryText)
    .then(response=>{
        console.log(response.rows);
        
        res.send(response.rows)
    })
    .catch(err=>{
        console.log(err);
        
    })
})

module.exports = router