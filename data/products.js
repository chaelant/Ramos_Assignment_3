const path = require('path');

module.exports = {

    getProducts: function() {
        return productList = {
            'Product1': {
                'Name': 'Product 1',
                'ShortDesc': 'This is product 1',
                'FullDesc': 'This is all about product 1',
                'Image': path.resolve('/public/images/product1.jpg')
            }
        };
    }
};
