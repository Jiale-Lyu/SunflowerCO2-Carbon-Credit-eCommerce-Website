import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const oAuth2Client = new google.auth.OAuth2(
  process.env.OAUTH2_CLIENT_ID,
  process.env.OAUTH2_CLIENT_SECRET,
  process.env.OAUTH2_REDIRECT_URI
);
oAuth2Client.setCredentials({
  refresh_token: process.env.OAUTH2_REFRESH_TOKEN,
});

const sendEmail = async (user) => {
  try {
    const secret = process.env.JWT_SECRET + user.password;
    const token = jwt.sign({ email: user.email, id: user._id }, secret, {
      expiresIn: '15m',
    });
    const resetUrl = `http://localhost:3000/resetpassword/${user._id}/${token}`;
    const message = `<p>Hi ${user.name},</p> 
    <p>A request to reset your password has been submitted from SunflowerCO2, Please click on the link below to reset your password:  </p>
    <a href=${resetUrl} >Click here to reset your password</a>
    <p>The above link will expire in 15 minutes. Thank you!</p>`;

    const accessToken = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL,
        clientId: process.env.OAUTH2_CLIENT_ID,
        clientSecret: process.env.OAUTH2_CLIENT_SECRET,
        refreshToken: process.env.OAUTH2_REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: `SunflowerCO2 <${process.env.EMAIL}>`,
      to: user.email,
      subject: 'Password Reset Request for SunflowerCO2',
      // text: message,
      html: message,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
};

export default sendEmail;
