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
  return <h1 className="text-4xl font-display font-semibold">{children}</h1>;
}

function SectionHeaderDesc({ children }: SectionHeaderDescProps) {
  return <p className="text-sm">{children}</p>;
}

function SectionContainer({ children }: SectionContainerProps) {
  return (
    <div className="flex flex-col space-y-8 py-8 items-center justify-center">
      {children}
    </div>
  );
}

SectionContainer.Header = SectionHeader;
SectionContainer.HeaderDesc = SectionHeaderDesc;
export default SectionContainer;
