const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// POST api/users
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Enter a valid email address').isEmail(),
    check('password', 'Enter a password(min. 6 characters').isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('User route');
  },
);

module.exports = router;
