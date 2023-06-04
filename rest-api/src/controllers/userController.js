const userController = {
    getAllUsers: (req, res) => {
      // Retrieve all users from the database and send the response
      const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        // ...
      ];
      res.json(users);
    },
    
    getUserById: (req, res) => {
      // Retrieve a user by ID from the database and send the response
      const userId = req.params.id;
      const user = { id: userId, name: 'John' };
      res.json(user);
    }
  };
  
  module.exports = userController;
  