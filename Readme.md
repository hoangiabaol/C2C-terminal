# C2C-terminal

C2C-terminal là một dự án giúp kết nối hai terminal Pterodactyl lại với nhau, mở ra khả năng thực thi các lệnh mà console thông thường hoặc các egg không hỗ trợ (ngoại trừ các egg sử dụng custom startup). Mục tiêu của project là phá vỡ giới hạn mặc định, cho phép bạn chạy nhiều lệnh hệ thống như `bash`, `chmod` và các lệnh quản lý file, quyền truy cập mà egg mặc định không cho phép.

## Tính năng nổi bật

- **Kết nối hai terminal Pterodactyl**: Tương tác trực tiếp giữa các terminal.
- **Chạy các lệnh hệ thống nâng cao**: Hỗ trợ thực thi các lệnh như bash, chmod, và một số lệnh quản trị khác mà egg mặc định bị chặn.
- **Không thay đổi cấu hình egg**: Không cần custom startup, không phải chỉnh sửa egg, hoạt động độc lập.
- **Client đa nền tảng**: File client hỗ trợ Node.js, Python, TypeScript, Bun.
- **File Main chỉ sử dụng Bun**: File main của dự án chạy trên Bun, đảm nhiệm việc kết nối và xử lý lệnh giữa các terminal.

## Đặc biệt: Không cần cài thư viện ngoài

- **Toàn bộ các file trong dự án này đều không phụ thuộc vào bất kỳ thư viện ngoài nào.**
- Bạn chỉ cần có Bun (hoặc môi trường Node.js/Python/TS nếu dùng client) và sử dụng các API có sẵn.
- Không cần chạy lệnh `bun install`, `npm install` hay `pip install`.

## Cách thức hoạt động

- **File chính của dự án là `main`**: Chạy trên Bun, quản lý kết nối và truyền lệnh giữa các terminal, không dùng thư viện ngoài.
- **File client**: Hỗ trợ đa ngôn ngữ (Node.js, Python, TypeScript, Bun), không sử dụng package ngoài, cho phép bạn tích hợp hoặc sử dụng trên nhiều môi trường khác nhau để gửi lệnh hoặc nhận dữ liệu từ server Bun.
- Hỗ trợ gửi nhận lệnh, output và dữ liệu giữa các server một cách bảo mật.

## Hạn chế về lệnh

- Do Pterodactyl chạy trong môi trường sandbox, **một số lệnh hệ thống như `apt`, `sudo` sẽ không hoạt động**.
- Các lệnh thay đổi môi trường như `cd` cũng sẽ không có tác dụng vì console bị giới hạn quyền truy cập thư mục và không duy trì trạng thái phiên làm việc.
- Dự án này tập trung hỗ trợ các lệnh thực thi file, quản lý quyền, và các thao tác mà console gốc cho phép.

## Hướng dẫn cài đặt & sử dụng

1. Clone repository về máy:
   ```bash
   git clone https://github.com/hoangiabaol/C2C-terminal.git
   ```
2. Đảm bảo môi trường đã cài Bun (hoặc Node.js/Python/TS nếu dùng client).
3. Chạy file chính (main):
   ```bash
   bun main.ts
   ```
4. Sử dụng file client:
   - Chọn môi trường phù hợp (Node.js/Python/TS/Bun) và thực thi file client tương ứng để kết nối tới server Bun.

## Ví dụ lệnh hỗ trợ

- Chạy bash trực tiếp:
  ```bash
  bash
  ```
- Thay đổi quyền file:
  ```bash
  chmod +x file.sh
  ```
- Các lệnh quản lý hệ thống khác...

## Lưu ý

- Đảm bảo có quyền truy cập phù hợp vào các terminal Pterodactyl.
- Luôn kiểm tra và bảo vệ dữ liệu khi thực thi các lệnh nguy hiểm.

## Tác giả & Mục đích sử dụng

- **Tác giả:** hoangiabaol
- **Mục đích:** Dự án chỉ phục vụ cho mục đích học tập, nghiên cứu và mở rộng kiến thức về terminal, Pterodactyl, Bun.
- **Miễn trừ trách nhiệm:** Tác giả không chịu trách nhiệm với bất kỳ thiệt hại nào gây ra bởi việc sử dụng project này cho các chương trình độc hại như botnet, DDoS, hay các mục đích xâm phạm pháp luật. Người dùng phải tự chịu trách nhiệm với hành vi sử dụng của mình.

## Đóng góp & License

- Mở rộng, đóng góp ý tưởng hoặc code vui lòng tạo PR hoặc issue mới.
- Dự án mở nguồn theo giấy phép MIT.

---

**C2C-terminal** giúp bạn khai thác tối đa sức mạnh và khả năng tuỳ biến của Pterodactyl, vượt qua những hạn chế mặc định mà egg console mang lại!