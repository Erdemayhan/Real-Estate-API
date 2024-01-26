const { submitQuery, getInsertId } = require("~root/lib/database");

const insertUser = ({ username, email, password, userTypeId }) => submitQuery`
  INSERT INTO users
  (
    username,
    email,
    password,
    user_type_id,
  )
  VALUES
  (
    ${username},
    ${email},
    sha2(concat(${password},${process.env.password_salt}), 224),
    ${userTypeId},
  )
`;

module.exports = getInsertId(insertUser);
