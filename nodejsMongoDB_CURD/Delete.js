const Delete = async (User, userId) => {
    try {
      const deletedUser = await User.findByIdAndDelete(userId);
      console.log('User deleted:', deletedUser);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
};

module.exports = Delete;
