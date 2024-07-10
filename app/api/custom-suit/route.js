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

  const subject = type === 'admin' ? 'New Custom Suit Order' : 'Thank you for your order!';
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
    .content table {
      width: 100%;
      border-collapse: collapse;
    }
    .content table, .content th, .content td {
      border: 1px solid #999;
    }
    .content th, .content td {
      padding: 8px;
      text-align: left;
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
      <h1>New Custom Suit Order</h1>
    </div>
    <div class="content">
      <h2>Order Details</h2>
      <div class="info">
        <p><strong>First Name:</strong> ${data.personalInformation.firstname}</p>
        <p><strong>Last Name:</strong> ${data.personalInformation.lastname}</p>
        <p><strong>Email:</strong> ${data.personalInformation.email}</p>
        <p><strong>Phone:</strong> ${data.personalInformation.phone}</p>
        <p><strong>Address:</strong> ${data.personalInformation.address}</p>
        <p><strong>Message:</strong> ${data.personalInformation.message}</p>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jacket Style</td>
              <td>${data.customSuit.jacket?.style?.title || 'N/A'}</td>
            </tr>
            <tr>
              <td>Jacket Lining</td>
              <td>${data.customSuit.jacket?.lining?.title || 'N/A'}</td>
            </tr>
            <tr>
              <td>Jacket Button</td>
              <td>${data.customSuit.jacket?.button?.title || 'N/A'}</td>
            </tr>
            <tr>
              <td>Jacket Lapel</td>
              <td>${data.customSuit.jacket?.lapel?.title || 'N/A'}</td>
            </tr>
            <tr>
              <td>Jacket Canvas</td>
              <td>${data.customSuit.jacket?.canvas?.title || 'N/A'}</td>
            </tr>
            <tr>
              <td>Jacket Color</td>
              <td>${data.customSuit.options?.jacketColor?.title || 'N/A'}</td>
            </tr>
            <tr>
              <td>Trouser Waistband</td>
              <td>${data.customSuit.trousers?.waistband?.title || 'N/A'}</td>
            </tr>
            <tr>
              <td>Trouser Pocket</td>
              <td>${data.customSuit.trousers?.pocket?.title || 'N/A'}</td>
            </tr>
            <tr>
              <td>Trouser Pleat</td>
              <td>${data.customSuit.trousers?.pleat?.title || 'N/A'}</td>
            </tr>
            <tr>
              <td>Trouser Hem</td>
              <td>${data.customSuit.trousers?.hem?.title || 'N/A'}</td>
            </tr>
            <tr>
              <td>Trouser Button</td>
              <td>${data.customSuit.trousers?.trouserButton?.title || 'N/A'}</td>
            </tr>
            <tr>
              <td>Trouser Color</td>
              <td>${data.customSuit.options?.trouserColor?.title || 'N/A'}</td>
            </tr>
            ${data.customSuit.waistcoat ? `
            <tr>
              <td>Waistcoat Closure</td>
              <td>${data.customSuit.waistcoat?.closure?.title || 'N/A'}</td>
            </tr>
            <tr>
              <td>Waistcoat Style</td>
              <td>${data.customSuit.waistcoat?.waistcoatStyle?.title || 'N/A'}</td>
            </tr>
            <tr>
              <td>Waistcoat Pocket</td>
              <td>${data.customSuit.waistcoat?.waistcoatPocket?.title || 'N/A'}</td>
            </tr>
            <tr>
              <td>Waistcoat Back</td>
              <td>${data.customSuit.waistcoat?.backside?.title || 'N/A'}</td>
            </tr>
            <tr>
              <td>Waistcoat Lining</td>
              <td>${data.customSuit.waistcoat?.waistcoatLining?.title || 'N/A'}</td>
            </tr>
            <tr>
              <td>Waistcoat Button</td>
              <td>${data.customSuit.waistcoat?.waistcoatButton?.title || 'N/A'}</td>
            </tr>` : ''}
            <tr>
              <td>Jacket Material</td>
              <td>${data.customSuit.options?.jacketMaterial?.title || 'N/A'}</td>
            </tr>
            <tr>
              <td>Trouser Material</td>
              <td>${data.customSuit.options?.trouserMaterial?.title || 'N/A'}</td>
            </tr>
            <tr>
              <td>Jacket Sizing</td>
              <td>Sleeve: ${data.customSuit.options?.jacketSizing?.sleeve || 'N/A'}, Shoulder: ${data.customSuit.options?.jacketSizing?.shoulder || 'N/A'}, Chest: ${data.customSuit.options?.jacketSizing?.chest || 'N/A'}, Stomach: ${data.customSuit.options?.jacketSizing?.stomach || 'N/A'}</td>
            </tr>
            <tr>
              <td>Trouser Sizing</td>
              <td>Leg: ${data.customSuit.options?.trouserSizing?.leg || 'N/A'}, Waist: ${data.customSuit.options?.trouserSizing?.waist || 'N/A'}, Hips: ${data.customSuit.options?.trouserSizing?.hips || 'N/A'}, Thigh: ${data.customSuit.options?.trouserSizing?.thigh || 'N/A'}</td>
            </tr>
          </tbody>
        </table>
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
      .content table {
        width: 100%;
        border-collapse: collapse;
      }
      .content table, .content th, .content td {
        border: 1px solid #999;
      }
      .content th, .content td {
        padding: 8px;
        text-align: left;
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
        <h1>Thank You for Your Order!</h1>
      </div>
      <div class="content">
        <h2>We have received your order</h2>
        <div class="info">
          <p>Dear ${data.personalInformation.firstname} ${data.personalInformation.lastname},</p>
          <p>
            Thank you for placing an order with DMP Prestige Collections. Here are the details of your custom suit order:
          </p>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jacket Style</td>
                <td>${data.customSuit.jacket?.style?.title || 'N/A'}</td>
              </tr>
              <tr>
                <td>Jacket Lining</td>
                <td>${data.customSuit.jacket?.lining?.title || 'N/A'}</td>
              </tr>
              <tr>
                <td>Jacket Button</td>
                <td>${data.customSuit.jacket?.button?.title || 'N/A'}</td>
              </tr>
              <tr>
                <td>Jacket Lapel</td>
                <td>${data.customSuit.jacket?.lapel?.title || 'N/A'}</td>
              </tr>
              <tr>
                <td>Jacket Canvas</td>
                <td>${data.customSuit.jacket?.canvas?.title || 'N/A'}</td>
              </tr>
              <tr>
                <td>Jacket Color</td>
                <td>${data.customSuit.options?.jacketColor?.title || 'N/A'}</td>
              </tr>
              <tr>
                <td>Trouser Waistband</td>
                <td>${data.customSuit.trousers?.waistband?.title || 'N/A'}</td>
              </tr>
              <tr>
                <td>Trouser Pocket</td>
                <td>${data.customSuit.trousers?.pocket?.title || 'N/A'}</td>
              </tr>
              <tr>
                <td>Trouser Pleat</td>
                <td>${data.customSuit.trousers?.pleat?.title || 'N/A'}</td>
              </tr>
              <tr>
                <td>Trouser Hem</td>
                <td>${data.customSuit.trousers?.hem?.title || 'N/A'}</td>
              </tr>
              <tr>
                <td>Trouser Button</td>
                <td>${data.customSuit.trousers?.trouserButton?.title || 'N/A'}</td>
              </tr>
              <tr>
                <td>Trouser Color</td>
                <td>${data.customSuit.options?.trouserColor?.title || 'N/A'}</td>
              </tr>
              ${data.customSuit.waistcoat ? `
              <tr>
                <td>Waistcoat Closure</td>
                <td>${data.customSuit.waistcoat?.closure?.title || 'N/A'}</td>
              </tr>
              <tr>
                <td>Waistcoat Style</td>
                <td>${data.customSuit.waistcoat?.waistcoatStyle?.title || 'N/A'}</td>
              </tr>
              <tr>
                <td>Waistcoat Pocket</td>
                <td>${data.customSuit.waistcoat?.waistcoatPocket?.title || 'N/A'}</td>
              </tr>
              <tr>
                <td>Waistcoat Back</td>
                <td>${data.customSuit.waistcoat?.backside?.title || 'N/A'}</td>
              </tr>
              <tr>
                <td>Waistcoat Lining</td>
                <td>${data.customSuit.waistcoat?.waistcoatLining?.title || 'N/A'}</td>
              </tr>
              <tr>
                <td>Waistcoat Button</td>
                <td>${data.customSuit.waistcoat?.waistcoatButton?.title || 'N/A'}</td>
              </tr>` : ''}
              <tr>
                <td>Jacket Material</td>
                <td>${data.customSuit.options?.jacketMaterial?.title || 'N/A'}</td>
              </tr>
              <tr>
                <td>Trouser Material</td>
                <td>${data.customSuit.options?.trouserMaterial?.title || 'N/A'}</td>
              </tr>
              <tr>
                <td>Jacket Sizing</td>
                <td>Sleeve: ${data.customSuit.options?.jacketSizing?.sleeve || 'N/A'}, Shoulder: ${data.customSuit.options?.jacketSizing?.shoulder || 'N/A'}, Chest: ${data.customSuit.options?.jacketSizing?.chest || 'N/A'}, Stomach: ${data.customSuit.options?.jacketSizing?.stomach || 'N/A'}</td>
              </tr>
              <tr>
                <td>Trouser Sizing</td>
                <td>Leg: ${data.customSuit.options?.trouserSizing?.leg || 'N/A'}, Waist: ${data.customSuit.options?.trouserSizing?.waist || 'N/A'}, Hips: ${data.customSuit.options?.trouserSizing?.hips || 'N/A'}, Thigh: ${data.customSuit.options?.trouserSizing?.thigh || 'N/A'}</td>
              </tr>
            </tbody>
          </table>
          <p>If you have any further questions or need immediate assistance, please do not hesitate to contact us at <strong>Dmpcollection@gmail.com</strong>.</p>
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
    to: type === 'admin' ? 'dmpcollectionprestige@gmail.com' : data.personalInformation.email,
    subject,
    html,
  });
};

export async function POST(request) {
  const { personalInformation, customSuit } = await request.json();

  const data = { personalInformation, customSuit };

  try {
    await sendEmail(data, 'admin');
    await sendEmail(data, 'subscriber');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
