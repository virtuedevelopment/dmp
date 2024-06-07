// app/api/send-mail/route.js
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const createClientEmailTemplate = (quoteRequest) => `
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
      .header h1 {
        margin: 0;
        color: #333333;
      }
      .header img {
        width: 100px;
        height: 100px;
        margin-block: 1.5rem;
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
        <h1>Quote Request Confirmation.</h1>
      </div>
      <div class="content">
        <h2>Thank you for your order, ${quoteRequest.name.first}!</h2>
        <div class="info">
          <p>We have received your order for the following item:</p>
          <p><strong>Item:</strong> ${quoteRequest.item}</p>
          <p><strong>Material:</strong> ${quoteRequest.material.name}</p>
          <p><strong>Color:</strong> ${quoteRequest.color}</p>
          <p>
            <strong>Additional Information:</strong>
            <br />
            ${quoteRequest.info}
          </p>
          <p>We will get back to you soon with more details.</p>
        </div>
      </div>
      <div class="footer">
        <p>
          &copy; 2024 DMP Collection Prestige. All rights reserved.
          <a href="/localhost:3000">Visit our site.</a>
        </p>
      </div>
    </div>
  </body>
</html>
`;

const createProviderEmailTemplate = (quoteRequest) => `
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
        <h1>New Order Received</h1>
      </div>
      <div class="content">
        <h2>Customer Order Details</h2>
        <div class="info">
          <p><strong>Item:</strong> ${quoteRequest.item}</p>
          <p><strong>Material:</strong> ${quoteRequest.material.name}</p>
          <p><strong>Color:</strong> ${quoteRequest.color}</p>
          <p><strong>Additional Information:</strong> <br>  ${quoteRequest.info}</p>
          <p>
            <strong>Client Name:</strong> ${quoteRequest.name.first}
            ${quoteRequest.name.last}
          </p>
          <p><strong>Email:</strong> ${quoteRequest.email}</p>
          <p><strong>Phone:</strong> ${quoteRequest.phone}</p>
        </div>
      </div>
      <div class="footer">
        <p>
          &copy; 2024 DMP Collection Prestige. All rights reserved.
          <a href="/localhost:3000">Visit our site.</a>
        </p>
      </div>
    </div>
  </body>
</html>

`;

export async function POST(request) {
  const { quoteRequest } = await request.json();

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail email
      pass: process.env.GMAIL_PASS, // Your Gmail password or app-specific password
    },
  });

  try {
    // Email to the provider
    await transporter.sendMail({
      from: process.env.GMAIL_USER, // Sender address
      to: 'kaineosiagwu@gmail.com', // Replace with your provider's email
      subject: 'DMP Collections: New Custom Order Received',
      html: createProviderEmailTemplate(quoteRequest),
    });

    // Email to the client
    await transporter.sendMail({
      from: process.env.GMAIL_USER, // Sender address
      to: quoteRequest.email, // Client's email
      subject: 'DMP Collections: We received your order',
      html: createClientEmailTemplate(quoteRequest),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}