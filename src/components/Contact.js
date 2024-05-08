const Contact = () => {
  return (
    <div className="flex flex-col mx-auto w-4/12">
      <h1 className="p-2 my-6 text-2xl font-bold text-center">Contact US</h1>
      <input
        className="border border-black m-2 p-2 rounded-lg"
        type="text"
        placeholder="name"
      />
      <input
        className="border border-black m-2 p-2 rounded-lg h-20"
        type="text"
        placeholder="message"
      />
      <button className="m-2 p-2 rounded-lg bg-black text-white">Submit</button>
    </div>
  );
};

export default Contact;
