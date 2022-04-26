# react-native-responsive-screen

Chức năng: Cấu hình và xử lý đa ngôn ngữ.
Link: https://github.com/AlexanderZaytsev/react-native-i18n

# Cài đặt:

1. Bước 1: yarn add react-native-i18n

# Sử dụng:

Sử dụng redux để quản lý ngôn ngữ và i18n dùng làm thư viện import đa ngôn ngữ.
Bước 1: Cấu hình redux để quản lý stateGlobals active cho loại ngôn ngữ nào.
Projects này : Ví dụ cấu hình 3 ngôn ngữ là Tiếng Anh + Tiếng Việt + Tiếng Trung.
Tham khảo cách cấu hình redux trong thư mục redux.
Bước 2: Cấu hình i18n
Bước 3:Sử dụng:

# Thay đổi cấu hình ngôn ngữ App
  await dispatch(actions.changeLanguages(languageCurrent));
# Thay đổi ngôn ngữ:
  const mapStateToProps = (GlobalState) => {
  const { LanguageReducer } = GlobalState;
  return {
  languageCurrent: LanguageReducer.language
  };
  };
  const { translations } = I18n;
  const { languageCurrent } = props;

=> String language: translations[languageCurrent]?.key