import { loadTranslations } from "@/lib/loadTranslations";
import { GetStaticPropsContext } from "next";

const WaitingList = () => {
  return (
    <div>
      <p>Join waiting list page. Collect data</p>
    </div>
  );
};

export default WaitingList;

// Fetch the translations based on the locale
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await loadTranslations(locale || "en-US");

  return {
    props: {
      messages,
    },
  };
}
