export default function TornPaperDivider() {
  return (
    <div className="relative w-full overflow-hidden leading-none z-20 -mb-1 torn-paper-edge-bottom">
      {"\n"}
      <svg
        className="relative block w-full h-12 sm:h-20 text-[#3b278c]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
      >
        {"\n"}
        <path
          d="M0,0 C30,35 65,10 110,45 C150,80 190,15 235,50 C280,85 320,20 370,60 C420,100 460,30 510,70 C560,110 600,25 650,65 C700,105 740,15 790,55 C840,95 880,30 930,70 C980,110 1020,20 1070,60 C1120,100 1160,25 1200,50 L1200,120 L0,120 Z"
          fill="currentColor"
        ></path>
        {"\n"}
      </svg>
      {"\n"}
    </div>
  );
}
