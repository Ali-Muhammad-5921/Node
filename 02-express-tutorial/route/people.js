const express = require('express');
const router = express.Router();
let {people} = require('../data')
let {getPeople, createPerson, updatePerson, deletePerson} = require('../controller/people')


//get method
router.get('/',getPeople)

// post method
router.post('/',createPerson);

// put method
router.put('/:id',updatePerson)

// delete method
router.delete('/:id',deletePerson)

// another way to export router
// router.route('/').get(getPeople).post(createPerson);
// router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;
