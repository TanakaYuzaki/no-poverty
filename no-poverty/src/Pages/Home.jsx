import Hero from '../Components/Hero/Hero.jsx'
import Details from '../Components/Why-No-Poverty/Details.jsx'
import Title from '../Components/Title/Title.jsx'
import Introduction from '../Components/Introduction/Introduction.jsx'
export default function Home(){
    return(
        <>
        <Hero></Hero>
        <Title subtitle="Giới thiệu về nhóm và đồ án"></Title>
        <Introduction></Introduction>
        <Title subtitle="Tại sao No Poverty" title="Các bạn có biết: Trung bình, chỉ khoảng 20–30% ứng viên được mời phỏng vấn sẽ nhận được lời mời làm việc."></Title>
        <Details></Details>
        
        </>
    )
}