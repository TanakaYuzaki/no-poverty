import Title from '../Components/Title/Title.jsx'
import poster from '../assets/poster.png'
import './Video.css'
export default function(){

    return(
        <>
        <Title subtitle="Poster & Video"></Title>
        <div className="poster">
            <img src={poster}></img>
        </div>
        <div className="film"></div>
        </>
        
    )
}