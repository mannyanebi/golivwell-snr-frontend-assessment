import React from "react";

type SectionContainerProps = {
  children: React.ReactNode;
};

type SectionHeaderProps = {
  children: React.ReactNode;
};

type SectionHeaderDescProps = {
  children: React.ReactNode;
};

function SectionHeader({ children }: SectionHeaderProps) {
  return <h1 className="text-3xl md:text-4xl font-display font-bold text-center">{children}</h1>;
}

function SectionHeaderDesc({ children }: SectionHeaderDescProps) {
  return <p className="text-sm text-center">{children}</p>;
}

function SectionContainer({ children }: SectionContainerProps) {
  return (
    <div className="flex flex-col space-y-8 py-12 md:py-16 items-center justify-center">
      {children}
    </div>
  );
}

SectionContainer.Header = SectionHeader;
SectionContainer.HeaderDesc = SectionHeaderDesc;
export default SectionContainer;
