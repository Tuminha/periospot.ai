const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/subscribe', async (req, res) => {
    const email = req.body.email;

    try {
        const response = await axios.post(`https://api.mailerlite.com/api/v2/groups/${process.env.MAILERLITE_GROUP_ID}/subscribers`, {
            email: email
        }, {
            headers: {
                'Content-Type': 'application/json',
                'X-MailerLite-ApiKey': process.env.MAILERLITE_API_KEY
            }
        });

        res.json({ success: true, message: 'Subscription successful' });
    } catch (error) {
        res.json({ success: false, message: 'Subscription failed' });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));