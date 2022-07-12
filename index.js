//Tạo đối tượng từ express từ thư viên Express thông thông qua hàm require.
const express = require('express')

//Tạo biến app từ phuowng thức express() 
const app = express()

//Tạo cổng port truy cập
const port = 3000



//Gọi phương thức GET http protocol, tạo tuyến đường res.send
app.get('/trang-chu', (req, res) => {
    res.send('Hello World!')
    var a = 1;
    var b = 2;

    var c = a + b;
})

//Truy cập trang webt theo cổng, lắng nghe đường chuyền 127.0.0.1 với cổng là 3000
//localhost tương ứng với địa chỉ ip 127.0.0.1
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}}`))