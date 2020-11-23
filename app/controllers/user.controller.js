const path = require('path');

exports.allAccess = (req, res) => {
    res.set('Content-Type', 'text/html')
    res.status(200).sendFile(path.join(__dirname, '../views/pages', 'public.html'));
    // res.status(200).send(Buffer.from('<p>papo\'s domain</p>'))
    // res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };  