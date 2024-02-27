import CartWidget from './CartWidget.jsx';

function Navbar() {
  return (
    <div>
      <nav className="h-14 py-3 px-10 bg-black text-white w-full text-lg">
        <div className="flex gap-4">
            <div className="">
              <a href="#">Tienda Solidaria</a>
            </div>
            <div className="grow">
            </div>
            <div className="">
              <a href="#">Productos</a>
            </div>
            <div className="">
              <a href="#">Categorías</a>
            </div>
            <div>
              <CartWidget />
            </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;