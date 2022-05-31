# Socket là gì?
Là 1 thư viện cho phép theo dõi 1 giao tiếp kết nối thời gian thực (real-time) 2 chiều dựa trên sự kiện giữa client - server.
+ 1 Server.
+ 1 Thư viện cho phép kết nối socket phía client.

Client phát emit - server lắng nghe hoặc ngược lại.
Việc sử dụng socket 2 phía là như nhau.


# 3 bước để tạo 1 socket: 
Bước 1: Khởi tạo kết nối.
Bước 2: Lắng nghe sự kiện.
Bước 3: Gửi sự kiện kèm theo dữ liệu.

Có 2 kết nối thường dùng nhất là on() và emit()
+ on() để lắng nghe sự kiện  
+ emit() dùng để phát ra sự kiện

