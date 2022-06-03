# express

# Link: https://expressjs.com/en/resources/middleware/cors.html

Chức năng: https://viblo.asia/p/cors-la-gi-cors-voi-nodejs-Qbq5QyyL5D8
+ Đúng như tên của nó thì cors nghĩa là chia sẻ tài nguyên chéo nhau, hơi khó hiểu 1 tí nhưng dễ hiểu hơn thì nó là việc bạn chia sẻ tài nguyên của các domain khác nhau cho nhau, hay đơn giản hơn là khi việc client gọi 1 api từ 1 nguồn khác có domain khác với trang hiện tại (nguồn gốc) chính là cors.
+ Xem - đọc định tuyến cơ bản.
+ Lỗi cors là một chính sách của trình duyệt nhằm ngăn chặn việc truy cập tài nguyên của các domain khác khi không được phép.
+  Để cho phép một ứng dụng web chạy ở origin này (thường là domain này) có thể truy cập được các tài nguyên ở origin khác (domain khác) ta cần cho phép cors thông qua các trường trong HTTP header để trình duyệt biết rằng ta cho phép truy cập cors.
# Cài đặt: 
$ npm install cors

# Sử dụng:
Cors là 1 pakage hết sức tiện lợi, cung cấp các middleware cho phép ta enable cors với nhiều option để tùy chỉnh và ngắn gọn cho express.

Để cho phép cors với toàn bộ route:
var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
 app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

Hoặc cài đặt riêng cho từng method URL:
var express = require('express')
var cors = require('cors')
var app = express()

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/products/:id', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for only example.com.'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
