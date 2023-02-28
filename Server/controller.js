require('dotenv').config()
const { CONNECTION_STRING } = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
            drop table if exists Sanctuaries;

            create table Sanctuary(
                sanc_id serial primary key,
                address varchar,
                type varchar,
                info text
            );

            insert into Sanctuary (address, type, info)
            values ('620 S Main St, Keller, TX 76248', 'Hospital', 'Multiple floors, medical supplies, near restaurants and gas station.')

            `).then(() => {
                console.log('DB seeded!')
                res.sendStatus(200)
            }).catch(err => console.log('error seeding DB', err))
        },

        getSanctuary: (req, res) => {
            sequelize.query(`SELECT * FROM Sanctuary;`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => crossOriginIsolated.log(err))
        },
    
        createSanc: (req, res) => {
            let { address, type, info} = req.body
            sequelize.query(`
            INSERT INTO Sanctuary (address, type, info)
            VALUES ('${address}', ${type}, ${info})
            `).then(dbRes => {res.status(200).send(dbRes[0])})
            .catch(err => console.log(err))
        },
    
        deleteSanc: (req, res) => {
            let { id } = req.params
            sequelize.query(`
            DELETE FROM Sanctuary WHERE sanc_id=${id};
            `).then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
        }
    }