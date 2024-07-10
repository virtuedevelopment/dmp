import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import fetch from 'node-fetch';

const GIST_ID = process.env.GIST_ID;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const getEmailsFromGist = async () => {
  const response = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    headers: {
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
    },
  });
  const gist = await response.json();
  return JSON.parse(gist.files['subscribers.json'].content);
};

const updateGist = async (emails) => {
  await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      files: {
        'subscribers.json': {
          content: JSON.stringify(emails, null, 2),
        },
      },
    }),
  });
};

const sendEmail = async (email, type) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const subject = type === 'admin' ? 'New Subscriber' : 'Thank you for subscribing';
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
            <h1>New Subscriber Alert</h1>
        </div>
        <div class="content">
            <h2>Subscription Notification</h2>
            <div class="info">
                <p>You have a new subscriber: ${email}</p>
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
        <h1>Thank You for Subscribing!</h1>
      </div>
      <div class="content">
        <h2>We will send you updates</h2>
        <div class="info">
          <p>Dear Subscriber,</p>
          <p>
            We are thrilled to have you join the DMP Prestige Collections
            family. Your subscription is confirmed, and you are now part of an
            exclusive community that receives the latest updates on our premium
            collections, special offers, and much more.
          </p>
          <p>
            At DMP Prestige Collections, we are committed to providing you with
            the finest quality products and exceptional customer service. As a
            subscriber, you will be the first to know about our new arrivals,
            upcoming sales, and exclusive events.
          </p>
          <p>
            Stay tuned for exciting news and updates from us. We look forward to
            serving you and hope you enjoy being a part of our prestigious
            community.
          </p>
          <p>
            If you have any questions or need assistance, please do not hesitate
            to contact us at <strong>Dmpcollection@gmail.com</strong>.
          </p>
          <p>
            Thank you once again for subscribing. We are excited to have you
            with us!
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
    to: type === 'admin' ? 'dmpcollectionprestige@gmail.com' : email,
    subject,
    html,
  });
};

export async function POST(request) {
  const { email } = await request.json();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ success: false, error: 'Invalid email' }, { status: 400 });
  }

  try {
    const emails = await getEmailsFromGist();
    if (emails.includes(email)) {
      return NextResponse.json({ success: false, error: 'Email already subscribed' }, { status: 400 });
    }

    emails.push(email);
    await updateGist(emails);

    await sendEmail(email, 'admin');
    await sendEmail(email, 'subscriber');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}