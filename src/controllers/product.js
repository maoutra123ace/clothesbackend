
// const util = require('util')
const mysql = require('mysql')
const db = require('../db/index.js')

module.exports = {
    getAll: (req, res) => {
        let sql = 'SELECT * FROM product'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    getbyID: (req, res) => {
        let sql = 'SELECT * FROM product WHERE product_id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let productId = req.params.productId;
        let sql = 'UPDATE product SET ? WHERE product_id = ?'
        db.query(sql, [data, productId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    add: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO product SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    }, 
    delete: (req, res) => {
        let sql = 'DELETE FROM product WHERE product_id = ?'
        db.query(sql, [req.params.productId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}
