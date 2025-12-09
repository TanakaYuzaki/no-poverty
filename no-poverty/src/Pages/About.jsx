import Card from '../Components/Card/Card.jsx'
import Title from '../Components/Title/Title.jsx'
import quynh from '../assets/quynh.jpg'
import Anh from '../assets/Anh.jpg'
import Lợi from '../assets/Lợi.jpg'
import Nghĩa from '../assets/Nghĩa.jpg'
import Khang from '../assets/Khang.jpg'
import Khoa from '../assets/Khoa.jpg'

import AboutQuynh from './AboutQuynh.jsx'
import AboutAnh from './AboutAnh.jsx'
import AboutLoi from './AboutLoi.jsx'
import AboutNghia from './AboutNghia.jsx'
import AboutKhang from './AboutKhang.jsx'
import AboutKhoa from './AboutKhoa.jsx'
export default function About(){
    let component
        switch(window.location.pathname){
        case "/quynh":
            component=<AboutQuynh></AboutQuynh>
            break;
        case "/anh":
            component = <AboutAnh></AboutAnh>
            break;
        case "/loi":
            component = <AboutLoi></AboutLoi>
            break;
        case "/nghia":
            component = <AboutNghia></AboutNghia>
            break;
        case "/khang":
            component=<AboutKhang></AboutKhang>
        case "/khoa":
            component=<AboutKhoa></AboutKhoa>
        default:
            component = null;
        }
    return(
        <>
        
        <Title subtitle="Các thành viên của Nhóm"></Title>
        <div className="card-grid">
        <Card image={quynh} name="Nguyễn Nhật Quỳnh" role="Nhóm Trưởng" description="MSSV: 25127131" link="/quynh"/>
        <Card image={Anh} name="Dương Trung Anh" role="Thư Ký" description="MSSV: 25127012" link="/anh"/>
        <Card image={Lợi} name="Hà Hoàng Lợi" role="Thành Viên" description="MSSV: 25127089" link="/loi"/>

        <Card image={Nghĩa} name="Nguyễn Tuấn Nghĩa" role="Thành viên" description="MSSV: 25127101" link="/nghia"/>
        <Card image={Khang} name="Nguyễn Duy Khang" role="Thành Viên" description="MSSV: 25127367" link= "/khang" />
        <Card image={Khoa} name="Phạm Nhật Đăng Khoa" role="Thành Viên" description="MSSV: 25127382" link= "/khoa" />
        </div>
        {component}
        </>
    )
    
}