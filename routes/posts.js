const express = require('express');
const router = express.Router();

/*  GET posts index
    /posts
*/
router.get('/', (req, res, next)=> {
  res.send('from /posts')
});

/*  GET create posts form
    /posts/new
*/
router.get('/new', (req, res, next)=> {
  res.send('from /posts/new')
});

/*  POST create post action
    /posts
*/
router.post('/', (req, res, next)=> {
  res.send('from create action /posts')
});

/*  GET one post
    /posts/:id
*/
router.get('/:id', (req, res, next)=> {
  res.send('from get one post /posts/:id')
});

/*  GET edit post form
    /posts/:id
*/
router.get('/:id/edit', (req, res, next)=> {
  res.send('from edit form /posts/:id')
});

/*  PUT edit post action
    /posts/:id
*/
router.put('/:id', (req, res, next)=> {
  res.send('from edit put /posts/:id')
});

/*  DELETE one post
    /posts/:id
*/
router.delete('/:id', (req, res, next)=> {
  res.send('from delete /posts/:id')
});

module.exports = router;
