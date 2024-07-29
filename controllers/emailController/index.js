const db = require("../../config");
const nodemailer = require("nodemailer");
const { zuse, acp, union } = require("../../models/users");

let findValidToken;

const handleRequest = (url) => {
  if (url === "/api/zuse/auth") {
    findValidToken = zuse.findValidToken;
  } else if (url === "/api/acp/auth") {
    findValidToken = acp.findValidToken;
  } else if (url === "/api/union/auth") {
    findValidToken = union.findValidToken;
  }
  return {
    findValidToken
  };
};

module.exports = {
    sendEmail: async (option) => {
        try {
            const transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD
                }
            });
            const mailOption = {
                from: process.env.EMAIL_FROM,
                to: option.email,
                subject: option.subject,
                html: option.message
            };
            await transporter.sendMail(mailOption, (err, info) => {
                if (err) console.log(err);
                console.log("Email sent");
                console.log(info);
            });
        } catch (err) {
            console.log(err);
        };
    },
    sendPasswordResetEmail: async (req, res, email, resetToken, origin) => {
      let message;

      if (origin) {
        const resetUrl = `${origin}/api/${site}/auth/reset?token=${resetToken}&email=${email}`;
        message = `<p>Please click the following link to reset your password: <a href="${resetUrl}">${resetUrl}</a></p>`;
      } else {
        message = `<p>Please use the following token to reset your password with the <code>/api/${site}/auth/reset</code> api route:</p>
        <p><code>${resetToken}</code></p>`;
      }

      await sendEmail({
        from: process.env.EMAIL_FROM,
        to: email,
        subject: "Password Reset Request",
        html: `<h4>Password Reset Request</h4>
          <p>Hello,</p>
          ${message}
          <p>If you did not request a password reset, no further action is required.</p>`
      });
    },
    validateResetToken: async (req, res, next) => {
      handleRequest(req.baseUrl);
      console.log(req.baseUrl);

      const email = req.body.email;
      const resetToken = req.body.token;

      if (!resetToken || !email) {
        return res.status(400).json({ message: "Token and email are required!" });
      }

      const currentTime = new Date(Date.now());
      
      const token = await db.query(findValidToken, [email, token, currentTime], (err, data) => {
        if (err) return res.json(err);
        return data[0];
      });

      if (!token) return res.status(400).json({ message: "Invalid token!" });

      next();
    }
}