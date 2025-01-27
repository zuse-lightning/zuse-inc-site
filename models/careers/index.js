let database;

if (process.env.NODE_ENV === "production") {
    database = process.env.PROD_DB_NAME;
} else if (process.env.NODE_ENV === "development") {
    database = process.env.DEV_DB_NAME;
}

const zuse = {
    getAllJobs: `SELECT * FROM ${database}.zuse_careers`,
    getJob: `SELECT * FROM ${database}.zuse_careers WHERE id = ?`,
    addJob: `INSERT INTO ${database}.zuse_careers (title, description, requirements, responsibilities, location, salary) VALUES (?)`,
    updateJob: `UPDATE ${database}.zuse_careers SET title = ?, description = ?, requirements = ?, responsibilities = ?, location = ?, salary = ? WHERE id = ?`,
    deleteJob: `DELETE FROM ${database}.zuse_careers WHERE id = ?`
};

const acp = {
    getAllJobs: `SELECT * FROM ${database}.acp_careers`,
    getJob: `SELECT * FROM ${database}.acp_careers WHERE id = ?`,
    addJob: `INSERT INTO ${database}.acp_careers (title, description, requirements, responsibilities, location, salary) VALUES (?)`,
    updateJob: `UPDATE ${database}.acp_careers SET title = ?, description = ?, requirements = ?, responsibilities = ?, location = ?, salary = ? WHERE id = ?`,
    deleteJob: `DELETE FROM ${database}.acp_careers WHERE id = ?`
};

const union = {
    getAllJobs: `SELECT * FROM ${database}.union_careers`,
    getJob: `SELECT * FROM ${database}.union_careers WHERE id = ?`,
    addJob: `INSERT INTO ${database}.union_careers (title, description, requirements, responsibilities, location, salary) VALUES (?)`,
    updateJob: `UPDATE ${database}.union_careers SET title = ?, description = ?, requirements = ?, responsibilities = ?, location = ?, salary = ? WHERE id = ?`,
    deleteJob: `DELETE FROM ${database}.union_careers WHERE id = ?`
};

module.exports = {
    zuse,
    acp,
    union
}