import React, { useState } from "react";
import { ButtonTitle, TitleWrapper, ContentWrapper } from "./styles";

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <TitleWrapper>
        {tabs &&
          tabs.length &&
          tabs.map((item, index) => {
            if (index === activeTab) {
              return (
                <ButtonTitle active key={item.title}>
                  {item.title}
                </ButtonTitle>
              );
            }
            return (
              <ButtonTitle key={item.title} onClick={() => setActiveTab(index)}>
                {item.title}
              </ButtonTitle>
            );
          })}
      </TitleWrapper>
      <ContentWrapper>{tabs[activeTab].content}</ContentWrapper>
    </div>
  );
}

export default Tabs;
