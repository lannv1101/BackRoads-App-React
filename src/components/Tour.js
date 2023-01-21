const Tour = ({id,imgSrc,date,title,text,map,days,money}) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={imgSrc} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <h4>{title}</h4>
        <p>{text}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {map}
          </p>
          <p>{days}</p>
          <p>{money}</p>
        </div>
      </div>
    </article>
  );
};

export default Tour;
