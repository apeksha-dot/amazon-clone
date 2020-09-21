const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { request, response } = require('express');
const stripe = require("stripe")(
  "sk_test_51HT9U2HKJucAc98O0nAxDOs8caPgot0kgOziyFRzMhtWTuoqzXywMrxZQdHcAPmF9zFkDN65qDQvTDInUP2XiRmp00ANmJ43ji"
);

//API

//App config
const app = express();

//Middleware
app.use(cors({origin: true}));
app.use(express.json());

//API Routes
app.get('/', (request, response) => response.status('200').send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment request recieved, for the amount =>', total );

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'inr'
    })

    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
})
//Listen Command
exports.api = functions.https.onRequest(app);


//http://localhost:5001/clone-fb450/us-central1/api