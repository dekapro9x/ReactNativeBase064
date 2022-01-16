Đổi tên các thành phần trong App khi lifecycles được đổi tên khỏi dự án.
+ Tìm hiểu lifeCicle:
# https://reactjs.org/docs/react-component.html#componentdidupdate

+ Fix các cảnh báo khi vòng đời bị đổi.
# Bước 1: Cài đặt:
+ npx react-codemod rename-unsafe-lifecycles
Need to install the following packages:
  react-codemod
Ok to proceed? (y)
+ Y
+ ? On which files or directory should the codemods be applied? (.) 
# Bước 2: Gán đường dẫn : .src/libJS/react-native-banner-carousel/Carousel.tsx
# Bước 3: Select định dạng.
> JavaScript
  JavaScript with Flow
  TypeScript