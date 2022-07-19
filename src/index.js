//Tạo đối tượng từ express từ thư viên Express thông thông qua hàm require.
const express = require('express');
//
const morgan = require('morgan');

const handlebar = require('express-handlebars');

const path = require('path');

//Tạo biến app từ phuowng thức express() 
const app = express();

//Tạo cổng port truy cập
const port = 3000;

//HTTP logger 
app.use(morgan('combined'));


//Đặt thư mục tĩnh
app.use(express.static(path.join(__dirname, 'public')));

//Template engine

app.engine('hbs', handlebar.engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
console.log("path : " + path.join(__dirname, 'resources/views'));
app.set('views', path.join(__dirname, 'resources/views'));
//app.use(express.static('views'));

//Gọi phương thức GET http protocol, tạo tuyến đường res.send
app.get('/home', (req, res) => {
    //res.send('Hello World!');
    //res.render('C:\Users\tutra\Desktop\Example_nodejs\blog\src\resources\views\home.hbs');
    res.render('home');
    
})

app.get('/news', (req, res) => {
    //res.send('Hello World!');
    //res.render('C:\Users\tutra\Desktop\Example_nodejs\blog\src\resources\views\home.hbs');
    res.render('news');
    
})

//Truy cập trang webt theo cổng, lắng nghe đường chuyền 127.0.0.1 với cổng là 3000
//localhost tương ứng với địa chỉ ip 127.0.0.1
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}}`));