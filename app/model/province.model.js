module.exports = (sequelize, Sequelize) => {
	const Province = sequelize.define('provinces', {
	  id: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV1,
		primaryKey: true
	  },
	  name: {
		  type: Sequelize.STRING
	  },
	  country_id: {
		  type: Sequelize.STRING
	  },
	});
	
	return Province;
}