const Contact=()=>{
  return (
  <div className="flex items-center justify-center min-h-screen">
  <form className="flex flex-col space-y-4 p-6 border rounded-xl shadow-lg w-1/3">
    <div>
      <label htmlFor="name" className="block mb-1 font-medium">
        Name:
      </label>
      <input
        id="name"
        type="text"
        placeholder="Enter your name"
        className="border border-gray-500 rounded-md p-2 w-full"
      />
    </div>

    <div>
      <label htmlFor="email" className="block mb-1 font-medium">
        Email:
      </label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        className="border border-gray-500 rounded-md p-2 w-full"
      />
    </div>

    <button className="bg-blue-500 text-white rounded-2xl px-4 py-2 hover:bg-blue-600">
      Submit
    </button>
  </form>
</div>

  )
}
export default Contact;