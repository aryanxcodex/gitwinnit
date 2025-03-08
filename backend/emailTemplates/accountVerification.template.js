import mailSender from "../mailSetup.js";
import dotenv from "dotenv";
dotenv.config();

// Send account verification email
export const accountVerificationEmail = async (email, token) => {
  return mailSender(
    email,
    "Verify Your Account - Engage 🚀",
    `<div style="font-size:18px; font-family: Arial, sans-serif; color: #000;">
      <h2 style="color: #1DA1F2;">Welcome to Engage!</h2>
      <p>You're just one step away from joining the conversation! Please verify your account by clicking the button below:</p>
      <a href='${`${process.env.BACKEND_URL}/auth/verify/${token}`}' style="text-decoration: none;">
        <button style="
          background-color: #1DA1F2; 
          color: #fff; 
          font-family: Arial, sans-serif; 
          font-size: 16px; 
          padding: 12px 30px; 
          border: none; 
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 5px;
          display: inline-block;
          transition: background-color 0.3s ease;
        ">Verify Account</button>
      </a>
      <p style="color: #555;">This link is valid for a single use.</p>
      <p style="color: #555;">We're excited to have you on board! 🎉</p>
    </div>`
  );
};

// Send password reset email
export const passwordResetEmail = async (email, token) => {
  return mailSender(
    email,
    "Reset Your Password - Engage 🔒",
    `<div style="font-size:18px; font-family: Arial, sans-serif; color: #000;">
      <h2 style="color: #1DA1F2;">Forgot Your Password?</h2>
      <p>No worries! Click the button below to reset your password and get back to sharing your ideas:</p>
      <a href='${`${process.env.BACKEND_URL}/auth/reset/${token}`}' style="text-decoration: none;">
        <button style="
          background-color: #1DA1F2; 
          color: #fff; 
          font-family: Arial, sans-serif; 
          font-size: 16px; 
          padding: 12px 30px; 
          border: none; 
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 5px;
          display: inline-block;
          transition: background-color 0.3s ease;
        ">Reset Password</button>
      </a>
      <p style="color: #555;">This link is valid for one-time use only.</p>
      <p style="color: #555;">If you didn’t request this, please ignore this email.</p>
    </div>`
  );
};
