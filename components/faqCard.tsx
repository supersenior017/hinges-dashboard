import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function FaqCard({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation('common');
  return (
    <div
      className={`${
        isOpen ? "mx-auto faq_card_active" : "mx-auto faq_card"
      } px-5 sm:px-8 py-3 sm:py-4 sm:mb-8 mb-2`}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      style={{ cursor: "pointer" }}
    >
      <div className="flex justify-between items-center font-['quicksand-bold']">
        <p className="faq_question sm:text-[23px] text-[14px]  lg:mx-5">{question}</p>

        <div  className={`faq_arrow_wrapper border-1 border-white ${isOpen ? "arrow_up" : "arrow_down"}`}>
          <img src="/images/arrow-down.png" alt="faq arrow" />
        </div>
      </div>

      {isOpen && (
        <p className="faq_answer sm:text-[17px] text-[11px] mx-auto lg:mx-5 mt-5 lg:max-w-6xl font-['quicksand-semibold']">
          {answer}
        </p>
      )}
    </div>
  );
}
