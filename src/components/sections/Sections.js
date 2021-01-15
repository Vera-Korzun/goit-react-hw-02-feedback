import React from "react";
import SectionWrapper from "./SectionWrapperStyled";

const Sections = ({ title, children }) => {
  return (
    <SectionWrapper>
      <section className="feedback">
        <h2 className="feedback__title">{title}</h2>
        {children}
      </section>
    </SectionWrapper>
  );
};

export default Sections;
