import quynh from '../assets/quynh.jpg'
import leader from '../assets/leader.png'
import './AboutQuynh.css'

export default function About_Quynh() {
  return (
    <div className="quynh-profile">
      {/* Heading for the member name */}
      <h1 className="quynh-heading">Quỳnh</h1>

      {/* Main image with caption */}
      <div className="quynh-image">
        <img src={quynh} alt="Quỳnh" />
        <div className="quynh-caption">
          <img src={leader} alt="Leader Icon" />
          <span className="quynh-caption-text">Team Leader</span>
        </div>
      </div>

      {/* Class information block */}
      <div className="class-information">
        <h1>MSSV: 25127131</h1>
        <h1>Nhóm DISC: D</h1>
      </div>

      {/* Description section */}
      <div className="description">
        <h2>Điểm Mạnh</h2>
        <p>Quản lí thời gian tốt và có tinh thần trách nhiệm cao</p>
        <p>Luôn sắp xếp công việc hợp lí và tuân thủ các deadline nghiêm ngặt</p>
        <p>Chủ động, cầu tiến và không ngừng học hỏi để nâng cao năng lực bản thân</p>

        <h2>Phong cách làm việc</h2>
        <p>Mình thuộc nhóm tính cách D (Dominance) nên mình có xu hướng làm việc một cách quyết đoán, tập trung vào kết quả và chủ động giải quyết các thử thách.</p>
        <p>Mình luôn đặt mục tiêu cao, tập trung vào hiệu suất và tìm cách tối ưu hóa quy trình làm việc</p>
        <p>Mình tin rằng với tinh thần trách nhiệm và khả năng ra quyết định nhanh chóng, mình có thể dẫn dắt công việc đạt được các thành tựu rõ rệt.</p>

        <h2>Thông tin liên lạc</h2>
        <p>Email: nhatquynhnguyen1107@gmail.com</p>
        <p>SĐT: 0903099013</p>
      </div>
    </div>
  )
}