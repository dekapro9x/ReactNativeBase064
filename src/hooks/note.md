# hooks bao gồm các hooks tự tạo ra để xử lý các bài toán riêng biệt.

# Thành phần: 
+ 1.useForceUpdate : Ép màn hình phải render lại theo ý muốn.

# Sử dụng:
+ 1.useForceUpdate:
import { useForceUpdate } from "@hooks/forceUpdate";
const forceUpdate = useForceUpdate();
const onPress = ()=>{
forceUpdate()
}