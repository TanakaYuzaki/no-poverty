import Khoa from '../assets/Khoa.jpg'
import member from '../assets/member.png'
import './AboutKhang.css'

export default function AboutKhoa() {
  return (
    <div className="anh-profile">
      {/* Heading for the member name */}
      <h1 className="anh-heading">Dương Trung Anh</h1>

      {/* Main image with caption */}
      <div className="anh-image">
        <img src={Khoa} alt="Dương Trung Anh" />
        <div className="anh-caption">
          <img src={member} alt="Vice Leader Icon" />
          <span className="anh-caption-text">Member</span>
        </div>
      </div>

      {/* Class information block */}
      <div className="class-information">
        <h1>MSSV: 25127382</h1>
        <h1>Nhóm DISC: S</h1>
      </div>

      {/* Description section */}
      <div className="description">
        <h2>Điểm Mạnh</h2>
        <p>Biết lắng nghe, tiếp thu ý kiến từ mọi người xung quanh</p>
        <p>Có trách nhiệm với tập thể, cố gắng hoàn thành các việc được giao</p>
        <p>Giữ không khí vui vẻ, thoải mái, không áp lực</p>

        <h2>Phong cách làm việc</h2>
        <p>Mình thuộc nhóm S (Steadiness), mặc dù khá rụt rè, ít nói nhưng khi được người khác chủ động bắt chuyện thì vẫn cười nói vui vẻ, hoà đồng</p>
        <p>Mình làm việc hầu hết theo kế hoạch và cũng có sự ổn định, nhưng cũng làm việc theo “cảm hứng”, mặc dù ổn định nhưng mình cũng đề cao sự linh hoạt, điều chỉnh theo tình huống</p>
        <p>Mình thường quan sát các chi tiết, nhìn nhận vấn đề theo hướng mở</p>
        <p>Mình luôn muốn hợp tác một cách vui vẻ, thoải mái làm việc, cởi mở.</p>

        <h2>Thông tin liên lạc</h2>
        <p>Email:  khoapham1122007@gmail.com</p>
        <p>SĐT: 0782756286</p>

      </div>
    </div>
  )
}