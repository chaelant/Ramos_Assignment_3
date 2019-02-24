const path = require('path');

module.exports = {

    getProducts: function() {
        return productList = [
            {
                '_id': 0,
                'Name': 'PokeNerd Indicator',
                'ShortDesc': 'A way to publicly show your PokeNerd tendencies',
                'FullDesc': 'This award-winning accessory was created to actively show off how much of a Pokemon Nerd you are! Wear it with pride, or don\'t if you\'re ashamed for some reason',
                'Image': path.resolve('/public/images/product1.jpg')
            },
            {
                '_id': 1,
                'Name': 'Zero Motivation Board',
                'ShortDesc': 'A place to list all the things you need to do but won\'t',
                'FullDesc': 'Display with pride all of the things you needed to do, but didn\'t because you\'re ridiculously under-motivated. Winner of the 2018 Lack-of-Lifestyle Award!',
                'Image': path.resolve('/public/images/product2.jpg')
            },
            {
                '_id': 2,
                'Name': 'Alphabet Reorganizer',
                'ShortDesc': 'Scramble your favorite alphabet in a completely nonsensical way',
                'FullDesc': 'Why have an input device with your alphabet in a predictable order when you can throw them literally anywhere!',
                'Image': path.resolve('/public/images/product3.jpg')
            },
            {
                '_id': 3,
                'Name': 'Idea Disposal',
                'ShortDesc': 'The writer\'s version of set it and forget it',
                'FullDesc': 'Spend quality time writing out detailed ideas and inspired thoughts in this leather-bound disposal, ' +
                    'only to completely forget that it exists! Come back to it in 8 years to realize how uninspired your ideas actually were! ' +
                    'Nominated for the 2017 Disappointment Award',
                'Image': path.resolve('/public/images/product4.jpg')
            },
            {
                '_id': 4,
                'Name': 'Drinkable Liquid Device',
                'ShortDesc': 'Thirsty? Put whatever you want in here and chug it down.',
                'FullDesc': 'Put whatever you want in this novel container and knock it back as you do your thing. Is it coffee? Water? Vodka? Motor Oil? Who knows!',
                'Image': path.resolve('/public/images/product5.jpg')
            },
            {
                '_id': 5,
                'Name': 'Tree Carcass',
                'ShortDesc': 'Print depressing things on the dead body of a tree',
                'FullDesc': 'Who needs trees when you can knock them all down, pound them into a pulp, turn them into this delightful material, and print mind-numbingly depressing information ' +
                        'on it about the world and society you live it? Winner of the 2016 Anti-Environment Award.',
                'Image': path.resolve('/public/images/product6.jpg')
            },
            {
                '_id': 6,
                'Name': 'Questionable Sandwich',
                'ShortDesc': 'Is it a sandwich? Or a vehicle for E. Coli?',
                'FullDesc': 'Play biochemical Russian Roulette with this mystery box of a product. What\'s more fun than playing fast and loose with your GI tract?',
                'Image': path.resolve('/public/images/product7.jpg')
            },
            {
                '_id': 7,
                'Name': 'Fancy Phalange Remover',
                'ShortDesc': 'Who needs a knife?',
                'FullDesc': 'Quentin Tarantino\'s favorite product of ours - a fancy way to detach those digits without dirtying your precious kitchenware. Featured in Tarantino\'s 2018 blockbuster: XXIII Olympic Winter Games',
                'Image': path.resolve('/public/images/product8.jpg')
            },
            {
                '_id': 8,
                'Name': 'Literal Manifestation of Anxiety',
                'ShortDesc': 'TICK TOCK TICK TOCK TICK TOCK',
                'FullDesc': 'TICK TOCK TICK TOCK TICK TOCK, keeping therapists in business since 2013.',
                'Image': path.resolve('/public/images/product9.jpg')
            },
            {
                '_id': 9,
                'Name': 'Portable Disease Incubator',
                'ShortDesc': 'Second to the doctor\'s office, hop into our moving incubator!',
                'FullDesc': 'Who has the time to go to the doctor\'s office just to get that one seasonal illness? Our Portable Disease Incubator gives you the convenience of getting where you need to be while enjoying a bath in your favorite viruses.',
                'Image': path.resolve('/public/images/product10.jpg')
            }
        ]
    }
};
