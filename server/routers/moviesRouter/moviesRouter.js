const express = require('express');
// const pool = require('../modules/pool');
const axios = require('axios');
const router = express.Router();
const pool = require('../../modules/pool');

router.get('/', (req, res) => {
    let queryText = `SELECT "movies".id, "movies".title, "movies".description, "movies".poster, array_agg("genres".name) as "genres" FROM "movies_genres"
                    JOIN "movies" on movies_id = "movies".id
                    JOIN "genres" on genres_id = "genres".id
                    GROUP BY "movies".id, "movies".title, "movies".description, "movies".poster
                    ORDER BY "movies".id;`
    pool.query(queryText)
        .then(response => {
            res.send(response.rows)
        })
        .catch(err => {
            console.log(err);

        })
})

router.post('/', (req, res) => {
    console.log(`IN SERVER POST`);
    
    console.log(req.body);

    let queryText = `UPDATE "movies"
        SET "description" = $2
        WHERE "id" = $1;`
    pool.query(queryText, [req.body.id, req.body.description])
        .then((result) => {
            res.sendStatus(200)
        })
        .catch((err) => {
            res.sendStatus(500)
        })

})

module.exports = router


