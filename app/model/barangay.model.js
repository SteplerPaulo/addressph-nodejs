module.exports = (sequelize, Sequelize) => {
	const Barangay = sequelize.define('barangays', {
	  id: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV1,
		primaryKey: true
	  },
	  name: {
		  type: Sequelize.STRING
	  },
	  municipality_id: {
		  type: Sequelize.STRING
	  },
	});
	return Barangay;
}