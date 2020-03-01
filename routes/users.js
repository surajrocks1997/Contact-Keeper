const express = require('express');
const router = express.Router();

router.post('/', (req,res) => {
    res.send('Regiser a User');
});

module.exports = router;

