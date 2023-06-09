import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row justify-around items-center bg-blue-950 border-t-2 border-white">
      <ul>
        <li className="font-bold text-xl">Follow us:</li>
        <li>instagram</li>
        <li>facebook</li>
      </ul>

      <section className="flex flex-col items-center justify-between">
        <h1 className="font-bold text-xl">Contact us</h1>
        <form
          className="flex flex-col items-center justify-between text-black"
          action=""
        >
          <input
            className="my-1 mx-2"
            type="text"
            name="email"
            placeholder=" ...email"
          />
          <input
            className="my-1 mx-2 h-20"
            type="text"
            name="text"
            placeholder=" ...write to us"
          />
        </form>
      </section>
    </div>
  );
};

export default Footer;
