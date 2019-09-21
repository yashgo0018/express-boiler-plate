import express from 'express';
import bodyParser from 'body-parser';
import { port } from './config';


// Making the App
const app = express();

// Setting up the view engine
app.set('view engine', 'pug');
app.set('views', 'views');

// Making the static files serve
app.use(express.static('public'));

// Adding BodyParser
app.use(bodyParser.urlencoded({ extended: true }));

///.........................///
// Add Your Routes Here

///.........................///

// 404 Page
app.use((req, res) => {
	res.status(404).render('404');
});

// Running The Server
app.listen(port, () => console.log(`Server running on port ${port}`));
