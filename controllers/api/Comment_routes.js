const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');
const res = require('express/lib/response');

router.get('/', (req, res) => {
    Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
    Comment.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(dbCommentData => {
        if(!dbCommentData) {
          res.status(404).json({ message: 'No comment found with ths id!' });
          return;
        }
       res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;