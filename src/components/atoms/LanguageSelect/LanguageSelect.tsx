import React, { useState } from "react";
import "./LanguageSelect.scss";
import { En } from "../../../assets/icons/warehouses/en";
import { Am } from "../../../assets/icons/warehouses/Am";
import { Ru } from "../../../assets/icons/warehouses/Ru";
import { ShortArrow } from "../../../assets/icons/warehouses/Arrow";
import { Text } from "../typography/Text/Text";

interface Language {
  code: string;
  flag: React.ReactNode;
}

export const LanguageSelec: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("ENG");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const languages: Language[] = [
    { code: "ENG", flag: <En /> },
    { code: "ARM", flag: <Am /> },
    { code: "RUS", flag: <Ru /> },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  const selectedLang = languages.find((lang) => lang.code === selectedLanguage);

  return (
    <div className="language-selector">
      <div className="selected-language" onClick={toggleDropdown}>
        <span className="flag">{selectedLang?.flag}</span>
        {/* <span className="code">{selectedLang?.code}</span> */}
        <Text variant="h3" weight="medium">
          {selectedLang?.code}
        </Text>
        <span className="arrow">
          {isOpen ? (
            <ShortArrow width={20} height={20} rotate={270} />
          ) : (
            <ShortArrow width={20} height={20} rotate={90} />
          )}
        </span>
      </div>

      {isOpen && (
        <ul className="dropdown">
          {languages
            .filter((lang) => lang.code !== selectedLanguage)
            .map((lang) => (
              <li
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
              >
                <span className="flag">{lang.flag}</span>
                <Text
                  variant="body2"
                  weight="medium"
                  customClassName="dark-blue-40"
                >
                  {lang?.code}
                </Text>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
