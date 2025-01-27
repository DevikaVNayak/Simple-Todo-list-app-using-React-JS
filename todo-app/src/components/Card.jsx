import profilepic from 'C:/Users/Dell/Downloads/devi.jpg'
import './index.css'
export default function Card(){
    return(
        <div className="card">
            <img className="cardImage" src={profilepic} alt="profile picture"></img>
            <h2 className='cardTitle'>Devika V Nayak</h2>
            <p className='cardText'> i'm a react developer</p>
        </div>
    )
}