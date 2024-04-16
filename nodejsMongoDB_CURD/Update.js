
const Update = async (User, userId, newData) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(userId, newData, { new: true });
      console.log('User updated:', updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
    }
};

module.exports = Update;
