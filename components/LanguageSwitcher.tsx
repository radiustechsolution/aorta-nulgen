import { useRouter } from "next/router";

// Type-safe language name mapping
const languageNames: { [key: string]: string } = {
  "en-US": "English",
  "nl-NL": "Dutch",
  "de-DE":"Deutsch"
};

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, locales, pathname, query, asPath } = router;

  const changeLanguage = (newLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <div className="flex justify-center outline-none items-center">
      <select
        className="px-2 py-1 text-black bg-transparent outline-none focus:outline-none  transition-all duration-200"
        value={locale}
        onChange={(e) => changeLanguage(e.target.value)}
        aria-label="Select language"
      >
        {locales?.map((lang) => (
          <option className="text-black" key={lang} value={lang}>
            {languageNames[lang] || lang}{" "}
            {/* Use mapping or fallback to locale code */}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
