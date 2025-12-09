import unemployment from '../../assets/unemployment.jpg'
import Unknown from '../../assets/Unknown.png'
import CV from '../../assets/CV.jpg'
import Confusion from '../../assets/Confusion.jpg'
import digital_icon from '../../assets/digital_icon.png'
import mentor from '../../assets/mentor.png'
import Idea from '../../assets/Idea.jpg'
import './Details.css'
function Details(){
    return(
        <div className="programs">
            <div className="program">
                <img src={CV}></img>
                <div className="caption">
                    <img src={Unknown}></img>
                    <h1>Thiếu Kinh Nghiệm Viết CV</h1>
                    <p>Ứng viên có thể chưa biết cách trình bày CV</p>

                </div>
            </div>
            <div className="program">
                <img src={Idea}></img>
                <div className="caption">
                    <img src={mentor}></img>
                    <h1>Không có người chỉ dẫn</h1>
                    <p>Không biết cách trình bày điểm mạnh</p>
                    <p>Thiếu luyện tập tình huống</p>

                </div>
            </div>
            <div className="program">
                <img src={Confusion}></img>
                <div className="caption">
                    <img src={digital_icon}></img>
                    <h1>Thiếu Kỹ năng số</h1>
                    <p>Thiếu kỹ năng sử dụng phần mềm chuyên môn</p>
                    <p>CV thiếu chuẩn mực số</p>

                </div>
            </div>
            
        </div>
    )

}

export default Details