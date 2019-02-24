# CS-554 Assignment 3

Learning and using Bootstrap, Gulp, and SASS.

Create a page that lists 10 fake products that includes:

1. Images
2. Product name
3. Short description
4. Longer description

Products should be in a grid, leveraging Bootstrap's card feature. Clicking on a button will open a modal with the longer description.

Utilize [Gulp](https://gulpjs.com) to compile and optimize the Sass code for Bootstrap customization. Run ```npm run-script build``` to compile into ```styles.min.css``` in ```public/css```.

Use [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/theming/) to create the style for the site. Customizations can be found in ```src/custom.scss```.

On the left of the grid, provide navigation in the form of anchor links which corresponds to the card in the grid.

Finally, ensure that the HTML is valid and the site passes [tota11y](http://khan.github.io/tota11y/) tests.

To run the site:
```
npm install
npm run-script build
npm start
```
