import Khang from '../assets/Khang.jpg'
import member from '../assets/member.png'
import './AboutKhang.css'

export default function AboutKhang() {
  return (
    <div className="anh-profile">
      {/* Heading for the member name */}
      <h1 className="anh-heading">Dương Trung Anh</h1>

      {/* Main image with caption */}
      <div className="anh-image">
        <img src={Khang} alt="Dương Trung Anh" />
        <div className="anh-caption">
          <img src={member} alt="Vice Leader Icon" />
          <span className="anh-caption-text">Member</span>
        </div>
      </div>

      {/* Class information block */}
      <div className="class-information">
        <h1>MSSV: 25127367</h1>
        <h1>Nhóm DISC: C</h1>
      </div>

      {/* Description section */}
      <div className="description">
        <h2>Điểm Mạnh</h2>
        <p>Biết lắng nghe, thích nghi và học hỏi từ người khác</p>
        <p>Có trách nhiệm với công việc</p>
        <p>Có đam mê và tinh thần học hỏi</p>

        <h2>Phong cách làm việc</h2>
        <p>Mình thuộc nhóm C (Conscientiousness)</p>
        <p>Mình làm việc một cách nghiêm túc và có tập trung</p>
        <p>Mình hay làm việc một cách chủ động</p>

        <h2>Thông tin liên lạc</h2>
        <p>Email: khoakhang2017a@gmail.com</p>
        <p>SĐT: 0789253089</p>

      </div>
    </div>
  )
}