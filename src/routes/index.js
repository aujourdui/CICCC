const router = require("express").Router();

router.get('/', (req, res) => {
    res.status(200).json({ msg: "/ Route checker"})
})

module.exports = router;
