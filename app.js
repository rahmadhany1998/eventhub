const express = require('express');
const app = express();
const mysql = require('mysql2');
require('dotenv').config();
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
        logging: false
    }
)

sequelize.authenticate()
    .then(() => {
        console.log('Database Connected!')
    })
    .catch((error) => {
        console.log('Failed Connecting to Database', error.message)
    })