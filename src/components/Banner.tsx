const Banner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-emerald-600 text-white py-3 px-4 text-center">
      {/* Mobile: Two lines, small text */}
      <div className="text-xs leading-tight sm:hidden">
        <div>EXCLUSIVE OFFER FOR QUALIFIED</div>
        <div>INVESTORS £1.50</div>
      </div>
      
      {/* Desktop: One line, small text */}
      <div className="hidden sm:block text-xs">
        EXCLUSIVE OFFER FOR QUALIFIED INVESTORS £1.50
      </div>
    </div>
  );
};

export default Banner;