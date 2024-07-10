import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const sendEmail = async (data, type) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const subject = type === 'admin' ? 'New Contact Form Submission' : 'Thank you for contacting us';
  const html = type === 'admin'
    ? `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 10px 0;
        }
        .header img {
            width: 100px;
            height: 100px;
            margin-block: 1.5rem;
        }
        .header h1 {
            margin: 0;
            color: #333333;
        }
        .content {
            padding: 20px;
        }
        .content h2 {
            color: #333333;
            text-align: center;
        }
        .content .info {
            padding: 1.5rem 0;
            border-top: solid 0.5px #999;
            border-bottom: solid 0.5px #999;
        }
        .content p {
            color: #666666;
            font-size: 15px;
        }
        .footer {
            text-align: center;
            padding: 10px 0;
            color: #999999;
            font-size: 12px;
        }
        .footer a {
            color: #cf352e;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://raw.githubusercontent.com/virtuedevelopment/misc/main/favicon.png" alt="logo" />
            <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
            <h2>Contact Form Details</h2>
            <div class="info">
                <p><strong>First Name:</strong> ${data.firstname}</p>
                <p><strong>Last Name:</strong> ${data.lastname}</p>
                <p><strong>Subject:</strong> ${data.subject}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Message:</strong> ${data.message}</p>
            </div>
        </div>
        <div class="footer">
            <p>&copy; 2024 DMP Collection Prestige. All rights reserved.</p>
            <a href="/localhost:3000">Visit our site.</a>
        </div>
    </div>
</body>
</html>
`
    : `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
        padding: 10px 0;
      }
      .header img {
        width: 100px;
        height: 100px;
        margin-block: 1.5rem;
      }
      .header h1 {
        margin: 0;
        color: #333333;
      }
      .content {
        padding: 20px;
      }
      .content h2 {
        color: #333333;
        text-align: center;
      }
      .content .info {
        padding: 1.5rem 0;
        border-top: solid 0.5px #999;
        border-bottom: solid 0.5px #999;
      }
      .content p {
        color: #666666;
        font-size: 15px;
      }
      .footer {
        text-align: center;
        padding: 10px 0;
        color: #999999;
        font-size: 12px;
      }
      .footer a {
        color: #cf352e;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img
          src="https://raw.githubusercontent.com/virtuedevelopment/misc/main/favicon.png"
          alt="logo"
        />
        <h1>Thank You for Your Inquiry!</h1>
      </div>
      <div class="content">
        <h2>We will respond within 72 hours</h2>
        <div class="info">
          <p>Dear ${data.firstname} ${data.lastname},</p>
          <p>
            Thank you for reaching out to DMP Prestige Collections. We have received your inquiry regarding "${data.subject}" and will get back to you within 72 hours or less.
          </p>
          <p>
            If you have any further questions or need immediate assistance, please do not hesitate to contact us at <strong>Dmpcollection@gmail.com</strong>.
          </p>
          <p>Best Regards,</p>
          <p>The DMP Prestige Collections Team</p>
        </div>
      </div>
      <div class="footer">
        <p>&copy; 2024 DMP Collection Prestige. All rights reserved.</p>
        <a href="/localhost:3000">Visit our site.</a>
      </div>
    </div>
  </body>
</html>
`;

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: type === 'admin' ? 'dmpcollectionprestige@gmail.com' : data.email,
    subject,
    html,
  });
};

export async function POST(request) {
  const { firstname, lastname, subject, email, message } = await request.json();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ success: false, error: 'Invalid email' }, { status: 400 });
  }

  const data = { firstname, lastname, subject, email, message };

  try {
    await sendEmail(data, 'admin');
    await sendEmail(data, 'subscriber');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}