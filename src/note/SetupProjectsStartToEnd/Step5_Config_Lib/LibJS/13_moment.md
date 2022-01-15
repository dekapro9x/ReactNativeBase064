# moment
Chức năng: Là một nền tảng JS độc lập dùng để xử lý các đối tượng ngày tháng độc lập. Dùng để : xử lý định dạng, hiển thị , validate, parse... timeStamp.
Link: https://momentjs.com/
# Cài đặt: 
1. Bước 1: yarn add moment 
2. Bước 2: Cấu hình trong AppCalendar.js, AppCalendarCustom.js.
# Sử dụng:
# Format Dates
moment().format('MMMM Do YYYY, h:mm:ss a'); // January 15th 2022, 10:26:35 am
moment().format('dddd');                    // Saturday
moment().format("MMM Do YY");               // Jan 15th 22
moment().format('YYYY [escaped] YYYY');     // 2022 escaped 2022
moment().format();    
# Relative Time
moment("20111031", "YYYYMMDD").fromNow(); // 10 years ago
moment("20120620", "YYYYMMDD").fromNow(); // 10 years ago
moment().startOf('day').fromNow();        // 10 hours ago
moment().endOf('day').fromNow();          // in 14 hours
moment().startOf('hour').fromNow();      
# Calendar Time
moment().subtract(10, 'days').calendar(); // 01/05/2022
moment().subtract(6, 'days').calendar();  // Last Sunday at 10:27 AM
moment().subtract(3, 'days').calendar();  // Last Wednesday at 10:27 AM
moment().subtract(1, 'days').calendar();  // Yesterday at 10:27 AM
moment().calendar();                      // Today at 10:27 AM
moment().add(1, 'days').calendar();       // Tomorrow at 10:27 AM
moment().add(3, 'days').calendar();       // Tuesday at 10:27 AM
moment().add(10, 'days').calendar();     
# Multiple Locale Support
moment.locale();         // en
moment().format('LT');   // 10:27 AM
moment().format('LTS');  // 10:27:18 AM
moment().format('L');    // 01/15/2022
moment().format('l');    // 1/15/2022
moment().format('LL');   // January 15, 2022
moment().format('ll');   // Jan 15, 2022
moment().format('LLL');  // January 15, 2022 10:27 AM
moment().format('lll');  // Jan 15, 2022 10:27 AM
moment().format('LLLL'); // Saturday, January 15, 2022 10:27 AM
moment().format('llll');