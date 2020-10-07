const express = require('express');

const People = require('../models/people');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email } = req.body;

  try {
    //caso email já esxista
    if (await People.findOne({ email }))
      return res.status(400).send({ error: 'User already exists' });

    const people = await People.create(req.body);

    return res.send({ people });
  } catch (err) {
    return res.status(400).send({ error: 'Registration failed' });
  }
});

module.exports = app => app.use('/auth', router);