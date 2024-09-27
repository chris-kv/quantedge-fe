import Button from "../Button/Button";

const Header = () => {
  return (
    <div className="flex h-16 text-white items-center justify-center px-6  bg-[#090909]">
      <div className="flex  items-center justify-center">
        <img src="icons/Breadcrumb button base.png" className="w-8 h-8" />
      </div>
      <div className="flex-1 ml-3 text-xl  items-center justify-center">
        Quant Edge
        {/* <Button
          text={"Draft"}
          className="bg-[#FFA34C33] px-2 py-1 text-[12px] ml-2"
        /> */}
      </div>
      <div>
        <Button
          className="ml-4 bg-[#575BC7] px-6 py-1 text-sm"
          text={"Set live"}
        />
      </div>
    </div>
  );
};

export default Header;
