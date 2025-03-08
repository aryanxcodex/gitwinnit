import mailSender from "../mailSetup.js";
import dotenv from "dotenv";
dotenv.config();

const welcomeEmail = async (email) => {
  return mailSender(
    email,
    "Welcome to Engage! 🚀",
    `<div style="font-size:16px; font-family: Arial, sans-serif; color: #000;">
        <h3 style="color: #1DA1F2; font-size: 20px;">Welcome to Engage! 🎉</h3>
        <h4 style="color: #1DA1F2; font-size: 18px;">Connect, Share, and Engage with the World! 🌍</h4>
        <b style="font-size: 14px;">Your journey to meaningful connections starts now! 🚀</b><br><br>
        
        Hi,<br>
        Welcome to <b>Engage</b> – your platform to share ideas, connect with others, and make your voice heard! 🎤<br>
        Thank you for joining our vibrant community. Together, we can create conversations that matter!<br><br>
        
        With Engage, you can:
        <ul>
          <li>📢 Share your thoughts and ideas with the world.</li>
          <li>🤝 Connect with like-minded individuals and communities.</li>
          <li>💡 Discover trending topics and join meaningful discussions.</li>
        </ul>
        
        Ready to start engaging?<br><br>
        
        <a href='${process.env.FRONTEND_URL}' style="text-decoration: none;">
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
          ">Start Engaging Now</button>
        </a><br><br>

        <span style="color: #555; font-size: 13px;">Your voice matters. Let's create conversations that inspire! 🚀</span><br>
        <b style="font-size: 14px;">Team Engage</b>
      </div>`
  );
};

export default welcomeEmail;
