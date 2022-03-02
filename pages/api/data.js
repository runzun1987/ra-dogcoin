// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require('fs');

export default function handler(req, res) {
  const { message, ogUrl, limit, increment } = req.body;

  const data = {
    message,
    ogUrl,
    limit,
    increment,
  };

  fs.writeFile('data.json', JSON.stringify(data), (err) => {
    if (err) {
      console.error(err);
      return;
    }

    //file written successfully
  });
  res.status(200).json({ name: 'John Doe' });
}
