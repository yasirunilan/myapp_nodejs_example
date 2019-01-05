'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */

        return queryInterface.addColumn(
            'SubCategories', // name of Source model
            'categoryId', // name of the key we're adding
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Categories', // name of Target model
                    key: 'id', // key in Target model that we're referencing
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            }
        );

    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */
        return queryInterface.removeColumn(
            'SubCategories', // name of Source model
            'categoryId' // key we want to remove
        );
    }
};