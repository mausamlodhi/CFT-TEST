import hashPassword from "../../common/index"
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "admin@codesfortomorrow.com",
          password: await hashPassword.encryptPassword('Admin123!@#'),
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user", null, {});
  },
};
