let database;

if (process.env.NODE_ENV === "production") {
    database = process.env.PROD_DB_NAME;
} else if (process.env.NODE_ENV === "development") {
    database = process.env.DEV_DB_NAME;
}

const zuse = {
    getAllJobs: `SELECT * FROM ${database}.zuse_careers`,
    getJobById: `SELECT * FROM ${database}.zuse_careers WHERE id = ?`,
    addJobListing: `INSERT INTO ${database}.zuse_careers (title, job_type, description, requirements, responsibilities, location, pay_rate, date) VALUES (?)`,
    updateJobListing: `UPDATE ${database}.zuse_careers SET title = ?, job_type = ?, description = ?, requirements = ?, responsibilities = ?, location = ?, pay_rate = ? WHERE id = ?`,
    deleteJobListing: `DELETE FROM ${database}.zuse_careers WHERE id = ?`
};

const acp = {
    getAllJobs: `SELECT * FROM ${database}.acp_careers`,
    getJobById: `SELECT * FROM ${database}.acp_careers WHERE id = ?`,
    addJobListing: `INSERT INTO ${database}.acp_careers (title, job_type, description, requirements, responsibilities, location, pay_rate, date) VALUES (?)`,
    updateJobListing: `UPDATE ${database}.acp_careers SET title = ?, job_type = ?, description = ?, requirements = ?, responsibilities = ?, location = ?, pay_rate = ? WHERE id = ?`,
    deleteJobListing: `DELETE FROM ${database}.acp_careers WHERE id = ?`
};

const union = {
    getAllJobs: `SELECT * FROM ${database}.union_careers`,
    getJobById: `SELECT * FROM ${database}.union_careers WHERE id = ?`,
    addJobListing: `INSERT INTO ${database}.union_careers (title, job_type, description, requirements, responsibilities, location, pay_rate, date) VALUES (?)`,
    updateJobListing: `UPDATE ${database}.union_careers SET title = ?, job_type = ?, description = ?, requirements = ?, responsibilities = ?, location = ?, pay_rate = ? WHERE id = ?`,
    deleteJobListing: `DELETE FROM ${database}.union_careers WHERE id = ?`
};

module.exports = {
    zuse,
    acp,
    union
}