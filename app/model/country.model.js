module.exports = (sequelize, Sequelize) => {
	const Country = sequelize.define('countries', {
	  id: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV1,
		primaryKey: true
	  },
	  name: {
		  type: Sequelize.STRING
	  },
	  country_code: {
		  type: Sequelize.STRING
	  },
	});

	return Country;
}