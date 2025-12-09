import Anh from '../assets/Anh.jpg'
import viceleader from '../assets/viceleader.jpg'
import './AboutAnh.css'

export default function AboutAnh() {
  return (
    <div className="anh-profile">
      {/* Heading for the member name */}
      <h1 className="anh-heading">Dương Trung Anh</h1>

      {/* Main image with caption */}
      <div className="anh-image">
        <img src={Anh} alt="Dương Trung Anh" />
        <div className="anh-caption">
          <img src={viceleader} alt="Vice Leader Icon" />
          <span className="anh-caption-text">Vice Leader</span>
        </div>
      </div>

      {/* Class information block */}
      <div className="class-information">
        <h1>MSSV: 25127012</h1>
        <h1>Nhóm DISC: S</h1>
      </div>

      {/* Description section */}
      <div className="description">
        <h2>Điểm Mạnh</h2>
        <p>Kiên nhẫn: Luôn hoàn thành nhiệm vụ được giao một cách cẩn thận và đúng hạn, đảm bảo tính nhất quán cho dự án.</p>
        <p>Hỗ trợ và Hợp tác: Sẵn lòng lắng nghe ý kiến thành viên, hỗ trợ đồng đội và giữ cho mối quan hệ trong nhóm luôn hòa thuận.</p>
        <p>Duy trì ổn định: Thích nghi tốt với kế hoạch nhóm đã thống nhất và là người giữ vai trò duy trì tiến độ công việc một cách ổn định.</p>

        <h2>Phong cách làm việc</h2>
        <p>Mình thuộc nhóm tính cách S (Steadiness) nên mình có xu hướng làm việc một cách ổn định, hợp tác và đề cao sự nhất quán trong quá trình làm dự án.</p>
        <p>Mình ưu tiên duy trì sự suôn sẻ của công việc đã được phân chia và đảm bảo chất lượng đầu ra theo đúng yêu cầu đề ra.</p>
        <p>Mình tập trung vào việc thực hiện các phần việc một cách chu đáo, không bỏ sót chi tiết, và luôn là thành viên sẵn sàng giúp đỡ các bạn khác khi cần.</p>

        <h2>Thông tin liên lạc</h2>
        <p>Email: philiptrunganh@gmail.com</p>
        <p>SĐT: 09096890300</p>
      </div>
    </div>
  )
}