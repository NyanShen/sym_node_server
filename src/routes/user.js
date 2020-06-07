const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {
            id: "111010214",
            name: 'Nyan Shen',
            code: "20200606002"
        }
    ])
});

router.get('/byname', (req, res) => {
    const query = req.query;
    res.json(query)
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name: "Nyan Shen"
    })
});

module.exports = router;

