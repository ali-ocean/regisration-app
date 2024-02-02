const nodemailer = require('nodemailer');

module.exports = async function (context, req) {
    try {
        // Get email feedback from the request
        const feedback = req.body.feedback;

        // Send email using Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'usmanali.pro82@gmail.com',  // replace with your Gmail address
                pass: 'M@@n@1982'   // replace with your Gmail password
            }
        });

        const mailOptions = {
            from: 'devops_instructor@uol.com',    // replace with your Gmail address
            to: 'usmanali.pro82@gmail.com',  // replace with your target email address
            subject: 'Feedback Submission',
            text: `Feedback: ${feedback}`
        };

        await transporter.sendMail(mailOptions);

        context.res = {
            status: 200,
            body: 'Email sent successfully!'
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: `Error: ${error.message}`
        };
    }
};
