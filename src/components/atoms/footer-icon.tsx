function FooterIcon({ icon }: { icon: string }) {
  return (
    <div className="flex items-center justify-center w-10 h-10 bg-[#4E4D4D] rounded-full">
      <img src={icon} alt="icon" />
    </div>
  );
}

export default FooterIcon;
