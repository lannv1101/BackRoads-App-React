const PageLinkss = ({href,itemClass,text}) => {
  return (
    <li>
      <a href={href} className={itemClass} rel="noreferrer">
        {text}
      </a>
    </li>
  );
};

export default PageLinkss;
