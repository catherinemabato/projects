import React from 'react';

import AccordionItem from './AccordionItem';

interface AccordionItemType {
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  accordionItems: AccordionItemType[];
}

const Accordion = ({ accordionItems = [] }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <div>
      {accordionItems.map(({ title, content }, index) => (
        <AccordionItem
          key={index}
          itemIndex={index}
          title={title}
          content={content}
          isActive={index === activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
};

export default Accordion;