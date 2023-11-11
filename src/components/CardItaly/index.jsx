import "./indedx.css";

export function Card({
    cardImg, lovedTxt, cardTitle,
    infoContent, iconImg,
}) {
return (
<div className="card">
    <div className="card-inner">
    <div className="card-img-container">
        <img src={cardImg} alt="card-img" />
        <div className="card-img-content">
        <div className={lovedTxt ? "loved" : ""}>
            <span className="loved-txt">
            {" "}
            <img src={iconImg} alt="" />
            {lovedTxt}
            </span>
        </div>
        </div>
    </div>
    <div className="card-info">
        <h4>{cardTitle}</h4>
        <p>{infoContent}</p>
    </div>
    </div>
</div>
);
};

