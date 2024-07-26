const db = require("../../config");
const nodemailer = require("nodemailer");

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
                from: process.env.EMAIL_USER,
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
    mailTemplate: () => {
        return `<!DOCTYPE html>
  <html>
  <body style="text-align: center; font-family: 'Verdana', serif; color: #000;">
    <div
      style="
        max-width: 400px;
        margin: 10px;
        background-color: #fafafa;
        padding: 25px;
        border-radius: 20px;
      "
    >
      <p style="text-align: left;">
        Use this link to reset your password. This link will expire in 1 hour.
      </p>
      <a href="/reset" target="_blank">
        <button
          style="
            background-color: #444394;
            border: 0;
            width: 200px;
            height: 30px;
            border-radius: 6px;
            color: #fff;
          "
        >
          Reset Password
        </button>
      </a>
      <p style="text-align: left;">
        If you are unable to click the above button, copy paste the below URL into your address bar
      </p>
      <a href="/reset" target="_blank">
          <p style="margin: 0px; text-align: left; font-size: 10px; text-decoration: none;">
            /reset
          </p>
      </a>
    </div>
  </body>
</html>`;
    }
}