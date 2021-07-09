require('dotenv').config()
const env = process.env;

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.DATABASE, env.DBUSERNAME, env.DBPASSWORD, {
  host: env.DBHOST || localhost,
  dialect: env.DIALECT || 'mysql',
  operatorsAliases: '0',
  pool: {
    max: parseInt(env.POOL_MAX) || 5,
    min: parseInt(env.POOL_MIN) || 0,
    acquire: parseInt(env.POOL_ACQUIRE) || 30000,
    idle: parseInt(env.POOL_IDLE) || 10000
  },
  define: {
    timestamps: false
  }
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;




db.barangays = require('../model/barangay.model.js')(sequelize, Sequelize);
db.countries = require('../model/country.model.js')(sequelize, Sequelize);
db.municipalities = require('../model/municipality.js')(sequelize, Sequelize);
db.provinces = require('../model/province.model.js')(sequelize, Sequelize);


//The Associations below have been created with all possible keys, those that are not needed can be removed

db.barangays.belongsTo(db.municipalities, { foreignKey: 'municipality_id', targetKey: 'id' });
db.countries.hasMany(db.provinces, { foreignKey: 'country_id', sourceKey: 'id' });

db.municipalities.hasMany(db.barangays, { foreignKey: 'municipality_id', sourceKey: 'id' });
db.municipalities.belongsTo(db.provinces, { foreignKey: 'province_id', sourceKey: 'id' });
db.provinces.belongsTo(db.countries, { foreignKey: 'country_id', sourceKey: 'id' });
db.provinces.hasMany(db.municipalities, { foreignKey: 'province_id', sourceKey: 'id' });


module.exports = db;