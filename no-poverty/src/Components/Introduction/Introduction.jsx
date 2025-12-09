import './Introduction.css'
import logo from '../../assets/logo.png'
import group from '../../assets/group.png'

function Introduction(){
    return(
        <div className="container">
            <div className="image">
                <img src={logo}></img>
                <div className="caption">
                    <img src={group}></img>
                    <p>Nhóm 08</p>
                </div>
            </div>
            <div className ="text">
                <p>Đồ án video này mang tên "Người hướng dẫn đồng hành" nhằm mục tiêu xóa bỏ sự bất bình đẳng cơ hội ngay trong khuôn viên trường. Câu chuyện theo chân Nhân và nhóm bạn, những người nhận thức được rằng nghèo đói không chỉ là sự thiếu thốn về vật chất mà còn là sự  thiếu hốn về vốn xã hội, kinh nghiệm thực chiến và sự tự tin. Họ đã biến kiến thức và kinh nghiệm của mình thành một "Ngân Hàng Cơ Hội" để giúp đỡ sinh viên khó khăn vượt qua những rào cản vô hình, tiếp cận các cơ hội việc làm và thu nhập cao. Xuyên suốt đồ án là hình ảnh của một môi trường học đường nơi kinh nghiệm và kết nối được chia sẻ, tạo nên sự công bằng trong việc tiếp cận tài nguyên. Qua đó, đồ án muốn truyền tải thông điệp mạnh mẽ rằng: Sự thịnh vượng bền vững bắt nguồn từ sự bình đẳng về cơ hội.</p>
            </div>
        </div>
    )
}

export default Introduction