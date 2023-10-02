import { SavedVid, MiniNav } from "../../components";
import "./savedVideo.css";


const Saved = () => {
    return (
        <div className="saved">
            <MiniNav />
            <div className="savedMid">
                <div className="saveMidLeft">
                    <h3>Hello, John Mark</h3>
                    <p>Here are your recorded videos</p>
                </div>
                <div className="savedMidRight">
                    <input type="search" name="" id="" placeholder="search for a particular video" />
                </div>
            </div>
            <div className="savedBottom">
                <p>Recent files</p>
                <div className="savedVideos">
                    <SavedVid />
                    <SavedVid />
                </div>
            </div>
        </div >
    )
}

export default Saved;