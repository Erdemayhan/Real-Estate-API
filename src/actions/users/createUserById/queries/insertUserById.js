const { submitQuery, getInsertId } = require("~root/lib/database");

const insertUserById = ({
  userName,
  email,
  password,
  userTypeId
}) => submitQuery`
  INSERT INTO users
  (
   username,
    email,
    password,
    user_type_id
  )
  VALUES
  (
    ${userName},
    ${email},
    sha2(concat(${password},${process.env.PASSWORD_SALT}), 224),
    ${userTypeId}
  )
`;

module.exports = getInsertId(insertUserById);
