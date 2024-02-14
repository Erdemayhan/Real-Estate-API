const { submitQuery, getInsertId } = require("~root/lib/database");

const insertUser = ({ username, email, password }) => submitQuery`
  INSERT INTO users
  (
    username,
    email,
    password,
   user_type_id
  )
  VALUES
  (
    ${username},
    ${email},
    SHA2(concat(${password},${process.env.PASSWORD_SALT}), 224),
    2
  )
`;

module.exports = getInsertId(insertUser);
