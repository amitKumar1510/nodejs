
const Read = async (User) => {
    try {
      const users = await User.find();
      console.log('Users:', users);
    } catch (error) {
      console.error('Error reading users:', error);
    }
};

module.exports = Read;
