// ===========================================================
// File: server/src/models/base.model.js
// Description: Base model for executing database queries
// ===========================================================
const pool = require('../config/db');

// Función para ejecutar consultas SQL
async function executeQuery(query, params = []) {
    try {
        const [rows] = await pool.query(query, params);
        return rows;
    } catch (error) {
        throw error;
    }
}

// Función para verificar la conexión a la base de datos
async function verificarConexion() {
    try {
        await pool.query('SELECT 1');
        console.log('Conexión a la base de datos exitosa.');
        return true;
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
        return false;
    }
}

module.exports = { executeQuery, verificarConexion };
