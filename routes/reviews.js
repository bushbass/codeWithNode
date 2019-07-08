const express = require('express');
const router = express.Router();

/*  GET reviews index
    /post/:id/reviews
*/
router.get('/', (req, res, next)=> {
  res.send('from /reviews')
});

/*  POST create review action
    /post/:id/reviews
*/
router.post('/', (req, res, next)=> {
  res.send('from create action /reviews')
});

/*  GET edit review form
    /reviews/:id
*/
router.get('/:reviews_id/edit', (req, res, next)=> {
  res.send('from edit form /reviews/:reviews_id')
});

/*  PUT edit review action
    /reviews/:reviews_id
*/
router.put('/:reviews_id', (req, res, next)=> {
  res.send('from edit put /reviews/:reviews_id')
});

/*  DELETE one review
    /reviews/:reviews_id
*/
router.delete('/:reviews_id', (req, res, next)=> {
  res.send('from delete /reviews/:reviews_id')
});

module.exports = router;
