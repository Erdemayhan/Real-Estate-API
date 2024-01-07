const fetchUserByDate = require("~root/actions/users/fetchUserByDate");
const handleAPIError = require("~root/utils/handleAPIError");

const getUserByDate = async (req, res) => {
  const { date } = req.params;

  try {
    const { user } = await fetchUserByDate({
      date
    });
    res.status(201).send({
      user
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getUserByDate;
