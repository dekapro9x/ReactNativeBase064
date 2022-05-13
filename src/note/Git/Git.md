# Tạo git cho projects : git init.
# Xem account git : git config --list
Chuyển tài khoản git : 
B1: git config --global user.email "<your-email-address>"
B2: git config --global user.name "<name>"
VD:
git config --global user.email "dekapro9x@gmail.com"
git config --global user.name "dekapro9x"
Sau khi reset xong phải dùng : git push --force mới push code được bằng account mới login.
# Các lệnh git thường sử dụng:
+ Lấy HEAD : git log 
+ Lấy danh sách branch: git branch -r
+ Quay về head git chỉ dùng trong trường hợp muốn back lại code sai: git reset --hard <code-hard-commit>
+ Lấy code mới nhất từ branch: git pull
+ Commit code : git commit -m"<name-commit>"
+ Push code : git push
+ Tạo branch mới : git checkout -b <branch-name>



