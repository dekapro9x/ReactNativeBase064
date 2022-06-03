# express

# Link: https://expressjs.com/

Chức năng: 
+ Định tuyến các route URI đầu cuối điều hướng ứng dụng.
+ Xem - đọc định tuyến cơ bản.
# Cài đặt: 

# Sử dụng:

# 1.app.all() xử lý tất cả method HTTP
const express = require('express')
const app = express()

app.all('/api/*', function(req, res, next) {
  console.log('only applied for routes that begin with /api')
  next()
})

# 2.app.use() chỉ các chức năng có thể gọi lại.

const express = require('express')
const app = express()

app.use(function(req, res, next) {
  console.log('hello world')
  next()
})

app.use(function(req, res, next) {
  console.log('happy holidays')
  next()
})

