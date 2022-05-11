# Bước 1: Tạo Icon từ 1 số web hỗ trợ hoặc từ AndroidStudio:
https://makeappicon.com/
https://easyappicon.com/
https://developer.android.com/studio/write/image-asset-studio
# Bước 2: Gắn ảnh Android trong android/app/src/main/res
Coppy các folder mipmap-hdpi/Idpi... vào.

# Bước 3: link ảnh vào trong AndroidManifest.xml:
+ android:icon="@mipmap/ic_launcher"
+ android:roundIcon="@mipmap/ic_launcher_round" => thay thành "@mipmap/ic_launcher"