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
            console.log(response.rows);

            res.send(response.rows)
        })
        .catch(err => {
            console.log(err);

        })
})

router.post('/', (req, res) => {
    res.sendStatus(200)
    let queryText = `UPDATE "movies"
        SET "description" = 'Derp'
        WHERE "id" = $1;`
    pool.query(queryText, [req.body.id])
        .then((result) => {
            res.sendStatus(200)
        })
        .catch((err) => {
            res.sendStatus(500)
        })

})

module.exports = router


