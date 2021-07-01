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
