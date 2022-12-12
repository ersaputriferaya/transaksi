import express, { urlencoded } from 'express';
import { homeController, shopChartController, transaksiController } from './controllers/checkoutController.js';
import { indexController, tambahController, tarikController, updateItemController } from './controllers/transaksiController.js';

const app = express();

app.use(express.static('public'))
app.use(express.static('views/img'))
app.use(express.static('views/vid'))

app.use(urlencoded({ extended: true }))
app.set('view engine', 'ejs');

app.get ("/home",shopChartController, homeController);

// Gudang Admin (Transaksi Admin)
app.get('/gudangAdmin', indexController);
app.post('/items/tambah', tambahController);
app.post('/items/tarik', tarikController);
app.get ("/updateItem/:id", updateItemController);

// checkout (Transaksi User)
app.post('/items/beli', transaksiController);


app.listen(4000,()=>{
    console.log("App berjalan dengan baik")
}) //5