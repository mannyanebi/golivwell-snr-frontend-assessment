function SectionFooterIcon({ icon }: { icon: string }) {
  return (
    <div className="flex items-center justify-center w-8 h-8 bg-[#e5f4f2] rounded-full">
      <img src={icon} alt="icon" />
    </div>
  );
}

export default SectionFooterIcon;
