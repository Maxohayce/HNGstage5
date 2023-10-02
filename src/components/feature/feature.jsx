import "./feature.css";

const feature = ({ title, content, img }) => {
    return (
        <div className="featureL">
            <div className="featureLContainer">
                <div className="feature">
                    <img src={img} alt={title} />
                    <div className="featureContent">
                        <h5>{title}</h5>
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default feature;