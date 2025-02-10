let database;

if (process.env.NODE_ENV === "production") {
    database = process.env.PROD_DB_NAME;
} else if (process.env.NODE_ENV === "development") {
    database = process.env.DEV_DB_NAME;
}

const zuse = {
    getAllJobs: `SELECT * FROM zuse_careers`,
    getJobById: `SELECT * FROM zuse_careers WHERE id = ?`,
    addJobListing: `INSERT INTO zuse_careers (title, job_type, description, requirements, responsibilities, location, pay_rate, date) VALUES (?)`,
    updateJobListing: `UPDATE zuse_careers SET title = ?, job_type = ?, description = ?, requirements = ?, responsibilities = ?, location = ?, pay_rate = ? WHERE id = ?`,
    deleteJobListing: `DELETE FROM zuse_careers WHERE id = ?`
};

const acp = {
    getAllJobs: `SELECT * FROM acp_careers`,
    getJobById: `SELECT * FROM acp_careers WHERE id = ?`,
    addJobListing: `INSERT INTO acp_careers (title, job_type, description, requirements, responsibilities, location, pay_rate, date) VALUES (?)`,
    updateJobListing: `UPDATE acp_careers SET title = ?, job_type = ?, description = ?, requirements = ?, responsibilities = ?, location = ?, pay_rate = ? WHERE id = ?`,
    deleteJobListing: `DELETE FROM acp_careers WHERE id = ?`
};

const union = {
    getAllJobs: `SELECT * FROM union_careers`,
    getJobById: `SELECT * FROM union_careers WHERE id = ?`,
    addJobListing: `INSERT INTO union_careers (title, job_type, description, requirements, responsibilities, location, pay_rate, date) VALUES (?)`,
    updateJobListing: `UPDATE union_careers SET title = ?, job_type = ?, description = ?, requirements = ?, responsibilities = ?, location = ?, pay_rate = ? WHERE id = ?`,
    deleteJobListing: `DELETE FROM union_careers WHERE id = ?`
};

module.exports = {
    zuse,
    acp,
    union
}