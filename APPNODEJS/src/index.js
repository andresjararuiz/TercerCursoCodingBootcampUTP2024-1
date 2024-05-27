import express from 'express' ;
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';
const app = express();
import indexRoutes from './routes/index.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(__dirname)
app.set('views', join(__dirname, 'views'))


app.set('view engine', 'ejs')
app.use(indexRoutes)

app.listen(3000);
console.log("Server esta escuchando en", 3000);