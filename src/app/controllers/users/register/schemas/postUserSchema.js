const yup = require("yup");
const selectUserByEmail = require("./queries/selectUserById");

const postUserSchema = yup.object().shape({
  usertName: yup
    .string()
    .required()
    .label("User Name")
    .typeError("User Name must be a number."),
  password: yup
    .string()
    .min(8)
    .required()
    .label("password")
    .typeError("password must be a number."),
  userTypeId: yup
    .number()
    .required()
    .label("User Type ID")
    .typeError("User Type Id must be a number."),
  email: yup
    .string()
    .email()
    .required()
    .label("Email")
    .typeError("Email is invalid.")
    .test("doesEmailExist", "User account already exists.", function test(
      email
    ) {
      return selectUserByEmail({ email }).then(account => {
        if (account) {
          return false;
        }
        return true;
      });
    })
});
module.exports = postUserSchema;
