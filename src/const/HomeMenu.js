// Chức năng bàn giao - Danh sách menu con.
const menuHandOver = [
    {
      title: "BÀN GIAO",
      id: ScreenKey.HAND_OVER,
      sortIndex: 1,
      color: "blue",
      icon: "transfer",
      endpointVersion: ""
    },
    {
      title: "ĐÓNG TẢI",
      id: ScreenKey.CLOSE_BAG,
      sortIndex: 2,
      color: "blue",
      icon: "package-variant-closed",
      endpointVersion: ""
    },
    {
      title: "CÂN TẢI",
      id: ScreenKey.SCALE_BAG,
      sortIndex: 3,
      color: "blue",
      icon: "scale",
      endpointVersion: ""
    },
  ];
  
  const HomeMenu = [
    {
      title: "Tạo Lộ Trình",
      id: ScreenKey.JOURNEY_CREATE_NEW,
      sortIndex: 1,
      color: "blue",
      icon: "truck",
      endpointVersion: "DEV"
    },
    {
      title: "Lịch Sử Lộ Trình",
      id: ScreenKey.JOURNEY_HISTORY,
      sortIndex: 1,
      color: "blue",
      icon: "history",
      endpointVersion: "DEV"
    },
    {
      title: "Yêu Cầu Nhận Hàng",
      id: ScreenKey.UPS_LIST_BELIEVE,
      sortIndex: 3,
      color: "blue",
      icon: "file-document-edit",
      endpointVersion: "DEV"
    },

    {
      title: "Nhận Hàng UPS Tại BC",
      id: ScreenKey.RECEIVE_PACKAGE_UPS,
      sortIndex: 3,
      color: "blue",
      icon: "text-box-multiple",
      endpointVersion: "DEV"
    },
    {
      title: "Bàn Giao Cho UPS",
      id: ScreenKey.UPS_HANDOVER,
      sortIndex: 3,
      color: "blue",
      icon: "truck-delivery",
      endpointVersion: "DEV"
    },
    {
      title: "Không Phát Được",
      id: ScreenKey.UNABLE_TO_DELIVER,
      sortIndex: 3,
      color: "blue",
      icon: "bag-personal-off",
      endpointVersion: ""
    },
    {
      title: "Đón Hàng",
      id: ScreenKey.PICK_UP,
      sortIndex: 2,
      color: "blue",
      icon: "dolly",
      endpointVersion: ""
    },
    {
      title: "Gửi Hàng",
      id: ScreenKey.SHIPPING_PACKAGE,
      sortIndex: 3,
      color: "blue",
      icon: "tanker-truck",
      endpointVersion: ""
    },
    {
      title: "Bàn Giao",
      id: ScreenKey.HAND_OVER_MENU_MINI,
      sortIndex: 3,
      color: "blue",
      icon: "folder-swap",
      dataMiniMenu: menuHandOver,
      endpointVersion: ""
    },
    //Đang làm lại nghiệp vụ:
    {
      title: "Nhận Hàng",
      id: ScreenKey.RECEIVE_PACKAGE,
      sortIndex: 3,
      color: "green",
      icon: "archive-arrow-down",
      endpointVersion: ""
    },
    {
      title: "Danh Sách Công Việc",
      id: ScreenKey.WORK_LIST,
      sortIndex: 2,
      color: "green",
      icon: "clipboard-list",
      endpointVersion: ""
    },
    //Đang đợi API:
    {
      title: " Phát Hàng",
      id: ScreenKey.DELIVERY,
      sortIndex: 2,
      color: "red",
      icon: "archive-arrow-up",
      endpointVersion: ""
    },
    {
      title: "Kí Gửi Hàng Bay",
      id: ScreenKey.MODAL_MENU_MINI,
      sortIndex: 2,
      color: "red",
      icon: "airplane-takeoff",
      dataMiniMenu: dataMiniMenuShippingFly,
      endpointVersion: ""
    },
    {
      title: "Giao Hàng",
      id: ScreenKey.SHIPPING_ORDER,
      sortIndex: 3,
      color: "red",
      icon: "cart",
      endpointVersion: ""
    },
    {
      title: "Phát Thành Công",
      id: ScreenKey.SCANNER,
      sortIndex: 2,
      color: "red",
      icon: "lan-check",
      endpointVersion: ""
    },
  ];