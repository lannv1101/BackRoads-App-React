import { PageLinks } from "../Data";
import PageLinkss from "./PageLinkss";

const PageLink = ({parentClass, itemClass}) => {
  return (
    <ul className={parentClass} id="nav-links">
      {PageLinks.map((link) => {
        return <PageLinkss key={link.id} {...link} itemClass={itemClass}/>
      })}
    </ul>
  );
};

export default PageLink;
