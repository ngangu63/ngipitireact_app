import { useContext , useEffect} from "react";
import Dropdown from "react-bootstrap/Dropdown";
import LanguageContext from "./LanguageContext";

const LanguageDetector = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage;
    if (!language) {
      setLanguage(userLanguage);
    }
  }, [language, setLanguage]);

  const handleSelect = (eventKey) => {
    setLanguage(eventKey);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center">
      
      <Dropdown  onSelect={handleSelect}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {language}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="fr-FR">Français</Dropdown.Item>
        <Dropdown.Item eventKey="en-US">English</Dropdown.Item>
        <Dropdown.Item eventKey="kg-CG">Kikongo</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
};

export default LanguageDetector;
