const { productModel } = require('../schema/schema');

const test = async (data) => {
    await productModel.create({
        title: data.title,
        category: data.category,
        rating: data.rating,
        price: data.price,
        color: data.color,
        img: data.img,
        material: data.material,
        pattern: data.pattern,
        description: data.description
    }).then(res => console.log(`created ${data.title}`))
    .catch(err => console.log(err));
}

module.exports = {
    test
}