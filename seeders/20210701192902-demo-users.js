'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: "Jeremiah Miller",
        username: "Jeremiahm33",
        password: "Christian33",
        email: "wjmiller@up.com",
      },
      {
        name: "Christian Miller",
        username: "Christian33",
        password: "Jeremiahm33",
        email: "millerrules23@hotmail.com",
      },
      {
        name: "Alycia Miller",
        username: "alyhansen",
        password: "husbandrocks",
        email: "alyhansen@live.com",
      },
      {
        name: "Alyjah Miller",
        username: "alyjahscool",
        password: "dadnmom",
        email: "alyjah@aol.com",
      },
      {
        name: "Thiah Miller",
        username: "thiahscool",
        password: "dadnmom",
        email: "thiah@aol.com",
      },
      {
        name: "Nonah Miller",
        username: "noahscool",
        password: "dadnmom",
        email: "noahjadon10@gmail.com",
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
