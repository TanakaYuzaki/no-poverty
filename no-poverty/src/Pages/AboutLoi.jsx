import Lợi from '../assets/Lợi.jpg'
import member from '../assets/member.png'
import './AboutAnh.css'

export default function AboutLoi() {
  return (
    <div className="anh-profile">
      {/* Heading for the member name */}
      <h1 className="anh-heading">Dương Trung Anh</h1>

      {/* Main image with caption */}
      <div className="anh-image">
        <img src={Lợi} alt="Dương Trung Anh" />
        <div className="anh-caption">
          <img src={member} alt="Vice Leader Icon" />
          <span className="anh-caption-text">Member</span>
        </div>
      </div>

      {/* Class information block */}
      <div className="class-information">
        <h1>MSSV: 25127089</h1>
        <h1>Nhóm DISC: C</h1>
      </div>

      {/* Description section */}
      <div className="description">
        <h2>Điểm Mạnh</h2>
        <p>Thái độ: Chững chạc - Nghiêm túc - Đúng hạn.</p>
        <p>Tư duy: Sôi nổi - Sáng tạo - Nhiều ý tưởng đột phá.</p>
        <p>Kết nối: Hòa đồng - Vui tươi - Luôn mang lại năng lượng tích cực.</p>

        <h2>Phong cách làm việc</h2>
        <p>Một sự kết hợp thú vị giữa sự chững chạc, nghiêm túc khi chạy deadline và tinh thần sôi nổi, bùng nổ sáng tạo khi brainstorm ý tưởng. Luôn hướng tới sự chuyên nghiệp trong công việc nhưng vẫn giữ thái độ hòa đồng, vui tươi trong kết nối.</p>

        <h2>Thông tin liên lạc</h2>
        <p>Email: loiha2007@gmail.com</p>
        <p>SĐT: 0985681146</p>

      </div>
    </div>
  )
}