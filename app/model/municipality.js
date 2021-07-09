module.exports = (sequelize, Sequelize) => {
	const Municipality = sequelize.define('municipalities', {
	  id: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV1,
		primaryKey: true
	  },
	  name: {
		  type: Sequelize.STRING
	  },
	  zipcode: {
		  type: Sequelize.STRING
	  },
	  province_id: {
		  type: Sequelize.STRING
	  },
	});

	return Municipality;
}