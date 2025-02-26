const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
// const { productModel } = require('./schema/schema');
// const { test } = require('./utilities/utilities');
app.use(express.static('public'));
app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(express.json());

const fetchProducts = require('./routes/fetchProuducts');

// for (let i=0; i<5; i++){
//     const data = {
//         title: `jewellery ${i+1}`,
//         category: 'jewellery',
//         rating: 5,
//         price: {
//             original: '1500',
//             discounted: '200'
//         },
//         color: ['red', 'green', 'blue'],
//         img: [
//             {id: 1, img: `http://localhost:8080/images/products/jewellery/jewellery_${i+1}.png`}
//         ],
//         material: 'unknown',
//         pattern: 'unknown',
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
//     }

//     test(data).then(res => {
//         console.log('confirmed');
//         return;
//     }).catch(err => console.log('failed'));
// }

app.use('/fetch-products', fetchProducts);

mongoose.connect(process.env.MONGO_URI, {
    connectTimeoutMS: '10000'
}).then(resp => console.log('database connected'))
.catch(err => console.log('failed to connect database'));

app.listen('8080', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('server is running on port 8080');
})
