import Sequelize from 'Sequelize';
import _ from 'lodash';
import Faker from 'faker';

const Con = new Sequelize(
  'capstone',
  'postgres',
  'postgres',
  {
    dialect: 'postgres',
    host: 'localhost'
  }
);

const Gamer = conn.define('gamer', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  platform: {
    type: Sequelize.STRING,
    allowNull: false
  },
  str_1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  str_2: {
    type: Sequelize.STRING,
    allowNull: false
  },
  SM_1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  SM_2: {
    type: Sequelize.STRING,
    allowNull: false
  },
  SM_3: {
    type: Sequelize.STRING,
    allowNull: false
  },
})


const Sponsor = conn.define('sponsor',{
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  WYD: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  WYLF: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

const Org = conn.define('org', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

const Team = conn.define('team', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

const Accomplishment = conn.define('accomplishment',{
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

const Need = conn.define('need',{
  need: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cost: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

const Game = conn.define('game',{
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  platform: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

const Rank = conn.define('rank',{
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})


Sponsor.hasMany(Org);
Sponsor.hasMany(Team);
Org.belongsTo(Sponsor);
Team.belongsTo(Sponsor);
Game.hasMany(Rank);
Game.hasMany(Gamer);
Rank.belongsTo(Game);
Gamer.belongsTo(Game);
Gamer.hasMany(Need);
Need.belongsTo(Gamer);
Accomplishment.hasMany(Gamer);
Accomplishment.hasMany(Team);
Gamer.belongsTo(Accomplishment);
Team.belongsTo(Accomplishment);

Conn.sync({force: true}).then(()=>{
  -.times(10, ()=>{
    return Gamer.create({
      name: Faker.name.name()
    })
  })
})
