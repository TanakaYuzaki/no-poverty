import Nghĩa from '../assets/Nghĩa.jpg'
import member from '../assets/member.png'
import './AboutKhang.css'

export default function AboutNghia() {
  return (
    <div className="anh-profile">
      {/* Heading for the member name */}
      <h1 className="anh-heading">Dương Trung Anh</h1>

      {/* Main image with caption */}
      <div className="anh-image">
        <img src={Nghĩa} alt="Dương Trung Anh" />
        <div className="anh-caption">
          <img src={member} alt="Vice Leader Icon" />
          <span className="anh-caption-text">Member</span>
        </div>
      </div>

      {/* Class information block */}
      <div className="class-information">
        <h1>MSSV: 25127101</h1>
        <h1>Nhóm DISC: C</h1>
      </div>

      {/* Description section */}
      <div className="description">
        <h2>Điểm Mạnh</h2>
        <p>Cẩn trọng và chính xác: Luôn kiểm tra kỹ lưỡng, tránh sai sót, quan tâm đến từng chi tiết nhỏ, đảm bảo mọi thứ đúng chuẩn.</p>
        <p>Tuân thủ quy tắc và nguyên tắc: Làm việc theo kế hoạch, có trách nhiệm với cam kết.</p>
        <p>Tỉ mỉ, tập trung vào chất lượng.</p>

        <h2>Phong cách làm việc</h2>
        <p>Mình thuộc nhóm C (Compliance) nên mình có xu hướng làm việc đặc trưng, thiên về tính chính xác, kỷ luật và chất lượng.</p>
        <p>Mình muốn làm việc có hệ thống và theo quy trình, luôn tuân thủ các bước, tiêu chuẩn hoặc hướng dẫn đã được thiết lập, có tài liệu rõ ràng, hoặc kế hoạch chi tiết trước khi bắt đầu. Mình khá không thích làm "theo cảm hứng" hay thay đổi đột ngột.</p>
        <p>Mình thường nhìn nhận vấn đề dựa trên dữ liệu, logic và bằng chứng.</p>
        <p>Mình sẽ làm việc tốt hơn khi có phản hồi mang tính xây dựng, mình không ghét bị sửa lỗi, miễn là phản hồi rõ ràng, khách quan và có cơ sở.</p>

        <h2>Thông tin liên lạc</h2>
        <p>Email: ntn0742007@gmail.com</p>
        <p>SĐT: 0849830757</p>

      </div>
    </div>
  )
}