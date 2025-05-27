import { Link } from "react-router-dom";



const FooterMenuItem = ({ href, item }) => {

  return (
    <li>
        <Link to={href} className="text-sm text-primary hover:text-white">
            {item}
        </Link>
    </li>
  );
};

export default FooterMenuItem;
