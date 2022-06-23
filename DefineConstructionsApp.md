src
# ───api (Danh sách API, các methord fetch API...)
# ───const (Khai baos hằng số và biến số, config App có giá trị không thay đổi)
# ───context (Chứa định nghĩa về Provider mục đích setup theme App)
# ───css (Định nghĩa css dùng chung cho toàn app)
# ───dataLocal (Chứa dữ liệu local)
│   ├───asynStorage
│   ├───realm
│   └───sqlLite
# ───element (Các thành phần component tái sử dụng cho toàn bộ App)
│   └───DateTimePicker
# ───HOC (Hight)
# ───hooks (Custom lại hook)
# ───images (File ảnh + video)
# ───language (Setup multi language)
│   └───i18n
# ───libJS (Chứa các lib không install vào node module chỉ clone về)
│   ├───image-zoom-viewer
│   ├───material-ripple
│   ├───react-native-animated-loader     
│   ├───react-native-banner-carousel     
│   ├───react-native-draggable-grid      
│   ├───react-native-image-pan-zoom      
│   │   └───image-zoom
│   ├───react-native-swiper
│   ├───react-native-text-ticker
│   └───react-native-waveview
# ───logEventSystem (log file : event, actions, api, bug...)
# ───navigation (Cấu hình route cho App)
# ───note (Ghi chú lại các phần: setup, bug, các kinh nghiệm sửa chữa bug...)
│   ├───AndroidStudio
│   ├───Babel
│   │   ├───JS
│   │   └───TS
│   ├───BugConfigApp
│   ├───BugLib
│   ├───Exp
│   │   └───ExpInterview
│   ├───Git
│   ├───Hook
│   ├───IOS
│   │   ├───LibNativeNeedConfigNative
│   │   └───XCode
│   ├───MacOS
│   ├───MongoDB
│   │   └───Realm
│   ├───NativeModuleAndroid
│   ├───NPM
│   │   └───dev-tool
│   ├───NPX
│   ├───Permissons
│   ├───PushNoti
│   │   ├───OneSignal
│   │   │   └───SetupImgOnsigner
│   │   └───PushNotifications
│   ├───Redux
│   ├───SetupProjectsStartToEnd
│   │   ├───Font
│   │   ├───Step1_Config_Dev_And_Avaiable
│   │   ├───Step2_Config_Splash_Screen
│   │   ├───Step3_Change_Icon_App
│   │   ├───Step4_Create_Key_Store
│   │   ├───Step5_Config_Lib
│   │   │   ├───LibJS
│   │   │   └───LibNative
│   │   │       ├───1_navigations
│   │   │       └───8_react-native-mmkv-storage
│   │   ├───Step6_Config_Element_App
│   │   └───Step7_Build_APK
│   │       └───Cmd
│   ├───Socket
│   ├───Ts
│   ├───VisualStudioCode
│   └───Yarn
# ───permissions (Cấu hình các quyền cho App)
# ───redux (App state manager)
│   ├───actions
│   ├───middel-ware
│   └───reducers
# ───resources (Cấu hình responsive)
# ───screen (Danh sách màn hình -  chức năng)
│   ├───Account
│   ├───Animations
│   │   └───components
│   │       ├───core
│   │       │   ├───decay
│   │       │   ├───extendAnimations
│   │       │   ├───parallel
│   │       │   ├───sequence
│   │       │   ├───spring
│   │       │   ├───stagger
│   │       │   └───timing
│   │       ├───extend
│   │       │   ├───AssistiveTouchLiveIOS
│   │       │   ├───TouchHandleAnimations
│   │       │   ├───TouchRecordAnimations
│   │       │   └───ZoomImgPanResponder
│   │       └───lib
│   │           ├───animatable
│   │           ├───bottom_sheet
│   │           ├───masked_view
│   │           ├───styled-components
│   │           └───table
│   ├───AppIntro
│   │   └───component
│   ├───BaseScreenMenu
│   │   └───component
│   │       └───lib1
│   ├───BasicJS
│   ├───BasicScreen
│   │   └───component
│   │       └───lib1
│   ├───BasicTS
│   ├───Camera
│   │   └───component
│   │       ├───CameraRoot
│   │       │   ├───QR
│   │       │   ├───TakePicture
│   │       │   └───VideoRecords
│   │       ├───Images
│   │       └───VisionsCamera
│   │           ├───CameraScanner
│   │           ├───CameraTakePicture
│   │           ├───Core
│   │           │   ├───frame-processors
│   │           │   ├───hooks
│   │           │   └───views
│   │           └───ZoomCamera
│   ├───Chart
│   │   └───component
│   │       └───lib1
│   ├───DeepLink
│   ├───Discovery
│   │   └───component
│   ├───File
│   │   └───component
│   │       ├───ReadFile
│   │       │   ├───JSON
│   │       │   ├───Mp3
│   │       │   ├───Mp4
│   │       │   └───PDF
│   │       ├───ShareFire
│   │       └───WriteFile
│   │           ├───CSV
│   │           ├───JSON
│   │           └───Txt
│   ├───FireBase
│   │   └───component
│   │       └───lib1
│   ├───FrequentlyQuestions
│   │   └───component
│   │       ├───JS
│   │       └───lib1
│   ├───Home
│   │   └───component
│   ├───InfoDevicesApp
│   ├───Login
│   ├───LogSystem
│   ├───Map
│   │   ├───components
│   │   │   ├───MapCore
│   │   │   ├───MapLocations
│   │   │   └───MapView
│   │   └───noteAttention
│   ├───MiniApp
│   │   └───component
│   │       ├───MoveableCircle
│   │       ├───SortMenu
│   │       └───StopWatch
│   ├───MyAccount
│   ├───NativeModuleAndroid
│   │   └───component
│   │       ├───NativeModule
│   │       │   ├───CalculatorNative
│   │       │   ├───CPU
│   │       │   └───LifeCycleAndroid
│   │       ├───PDA
│   │       └───ReadSMS
│   ├───NativeModuleIOS
│   ├───News
│   ├───OTP
│   ├───Policy
│   ├───PushNotifications
│   ├───Register
│   ├───SDK
│   ├───Search
│   ├───Security
│   │   └───component
│   │       └───lib1
│   ├───ServerNodeJS
│   │   └───component
│   │       ├───FetchAPI
│   │       │   └───api_login
│   │       └───SocketIO
│   ├───Socket
│   │   └───component
│   │       ├───CallPhone
│   │       ├───CallVideo
│   │       └───ChatMess
│   │           └───component
│   ├───Sound
│   │   └───component
│   │       ├───RecordSoundToText
│   │       └───RecordSoundTouch
│   ├───SystemSetting
│   ├───Video
│   │   └───component
│   │       ├───VideoMp4
│   │       └───Youtube
│   │           └───util
│   ├───VR-AR
│   ├───Weather
│   └───WebView
│       └───component
│           └───WebViewIE
# ───security (Cấu hình bảo mật - test những lib liên quan đến mã hóa thông tin)
# ───services (1 số custom services xử lý actions - event local app)
# ───servicesApp (Config các thư viện bên thứ 3: fire base, ads, push notifications, sentry )
│   ├───ads
│   ├───analytics
│   ├───fireBase
│   ├───pushLocal
│   ├───pushNotifications
│   │   ├───OneSignal
│   │   └───PushNotifications
│   └───sentry
# ───util (Các functions tái sử dụng của dự án)