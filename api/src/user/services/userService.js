const users = [
    { id: 1, name: 'Med' },
    { id: 2, name: 'Zied' },
    { id: 2, name: 'Zied' },
  ]
const  getAllUsers = async () => {
    

    //   let others;

    //   others = await User.find().exec();

    //   res.status(200).json({ data: others });
    // return others;
    return users;
}

module.exports = {
    getAllUsers
}