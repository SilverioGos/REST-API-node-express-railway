import { pool } from '../conexion.js'

export const getEmpleados = async(req,res) => {
    try{
        
        const [rows] = await pool.query('SELECT * FROM empleados')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Algo anda mal'
        })
    }
    
}

export const getEmpleado = async(req,res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM empleados WHERE id_empleado = ?', [req.params.id])
    if (rows.length <= 0 ) return res.status(404).json({
        message:'No existe el registro mencionado'
    })    
    res.json(rows[0])
    } catch (error){
        return res.status(500).json({
            message: 'Algo anda mal'
        })
    }
    
}

export const createEmpleados = async (req,res) => {
    const { nombre, edad } = req.body
    try{
        const [rows] = await pool.query('INSERT INTO empleados(nombre, edad) VALUES (?, ?)', [nombre, edad])
        res.send({ 
            id: rows.insertId,
            nombre,
            edad,
        })
    } catch (error){
        return res.status(500).json({
            message: 'Algo anda mal'
        })
    }
}

export const deleteEmpleados = async (req,res) => {
    try{
        const [result] = await pool.query('DELETE FROM empleados WHERE id_empleado = ?', [req.params.id])  
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'El empleado no fue encontrado'
        })
        res.sendStatus(204)
    } catch (error){
        return res.status(500).json({
            message: 'Algo anda mal'
        })
    }
} 

export const updateEmpleados = async(req,res) => {
    const {id} = req.params
    const {nombre, edad} = req.body
    try{
        const [result] = await pool.query('UPDATE empleados SET nombre = IFNULL(?, nombre), edad = IFNULL(?, edad) WHERE id_empleado = ?', [nombre, edad, id])
    console.log(result)
    if (result.affectedRows === 0) return res.status(404).json({
        message: 'El empleado no se ha encontrado'
    })
    const [rows] = await pool.query('SELECT * FROM empleados WHERE id_empleado = ?', [id])
    res.json(rows[0])
    } catch (error){
        return res.status(500).json({
            message: 'Algo anda mal'
        })
    }
    
}
