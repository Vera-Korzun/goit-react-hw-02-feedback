import React from "react";
import PropTypes from "prop-types";
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

Sections.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};
