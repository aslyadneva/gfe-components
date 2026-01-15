import React from "react";
import styles from "./Accordion.module.css";

interface AccordionProps {
  sections: {
    value: string;
    label: string;
    contents: string;
  }[];
}

export const Accordion = ({ sections }: AccordionProps) => {
  const [openSections, setOpenSections] = React.useState(new Set());

  console.log("openSections", openSections);

  const handleClick = (value: string) => {
    const newOpenSections = new Set(openSections);
    newOpenSections.has(value)
      ? newOpenSections.delete(value)
      : newOpenSections.add(value);
    setOpenSections(newOpenSections);
  };

  return (
    <div className={styles.accordion}>
      {sections.map(({ value, label, contents }) => {
        const isExpanded = openSections.has(value);

        const classString =
          styles["accordion-icon"] +
          (isExpanded ? ` ${styles["accordion-icon--rotated"]}` : "");

        return (
          <div key={value} className={styles["accordion-item"]}>
            <button
              className={styles["accordion-item-title"]}
              type="button"
              onClick={() => handleClick(value)}
            >
              {label}
              <span aria-hidden={true} className={classString} />
            </button>

            <div
              className={styles["accordion-item-contents"]}
              hidden={!isExpanded}
            >
              {contents}
            </div>
          </div>
        );
      })}
    </div>
  );
};
