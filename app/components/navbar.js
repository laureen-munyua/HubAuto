export default function Navbar(){
    return(
        <nav className="flex justify-between items-center px-8 py-4 bg-green-50 border-b border-green=200">
          <h1 className="text-green-700 text-4xl font-bold"> HubAuto</h1>
         <div className="flex gap-8">
             <a href="/" className="text-gray-700 hover:text-grey-600">Home</a>
             <a href="/cars" className="text-gray-700 hover:text-grey-600">Cars</a>
             <a href="/about" className="text-gray-700 hover:text-grey-600">About</a>
             <a href="/contact" className="text-gray-700 hover:text-grey-600">conctact</a>

         </div>
         <div className="flex items-center gap-4">
             <a href="/login" className="text-green-700 font-medium hover:text-green-900">Login</a>
             <a href="/signup" className="bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-700">Signup
             </a>

          </div>

        </nav>

    )
}