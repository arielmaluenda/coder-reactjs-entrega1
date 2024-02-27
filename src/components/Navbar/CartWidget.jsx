import Cart from '/public/vite.svg'

function Navbar() {
  return (
    <div className="">
      <div className="bg-black text-white text-lg flex">
        <img src="../../public/shopping-cart.svg" class="h-8 w-8"/>
        <div class="bg-red-500 h-8 w-8 rounded-xl ml-2 text-center font-bold">
          12
        </div>

      </div>
    </div>
  );
}

export default Navbar;