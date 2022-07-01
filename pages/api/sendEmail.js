const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function (req, res) {
  const { name, email, subject, message } = req.body;
  const emailBody = `Subject - ${subject}
                       ${message}
                       `;
  const content = {
    to: 'kirtan@kirtanbodawala.pro',
    from: 'kirtan@kirtanbodawala.pro',
    subject: `New Message From - ${name}`,
    text: emailBody,
    html: `<p>Email: ${email}</p><p>Subject: ${subject}</p><p>${message}</p>`,
  };

  if (!email) {
    res.status(400).send('Message not sent. Email can not be empty');
    return;
  }

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent.');
  }
}
