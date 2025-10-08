import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center text-white items-center h-[44vh] flex-col gap-4">
        <div className="font-bold text-5xl flex gap-2 justify-center items-center">
          {" "}
          Buy me a chai
          <span>
            <img src="/tea.gif" alt="" width={77} />
          </span>
        </div>
        <p>
          A crowd funding platform for creators to fund their projects.
        </p>
        <p>
          A place where your fans can buy you a chai.unleash the power of your fans and get your project funded.
        </p>
        <div>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Here
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white containor mx-auto pb-32 pt-14">
        <h1 className="text-3xl font-bold text-center mb-14">
          Your Fans can buy you a chai{" "}
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className=" bg-slate-400 rounded-full p-2 text-black"
              src="/man.gif"
              alt=""
              width={88}
            />
            <p className="font-bold ">Fans want to help </p>
            <p className=" text-center">
              {" "}
              your fans are available for you to help you{" "}
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className=" bg-slate-400 rounded-full p-2 text-black"
              src="/coin.gif"
              alt=""
              width={88}
            />
            <p className="font-bold ">Fans want to help </p>
            <p className=" text-center">
              {" "}
              your fans are available for you to help you{" "}
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img
              className=" bg-slate-400 rounded-full p-2 text-black"
              src="/group.gif"
              alt=""
              width={88}
            />
            <p className="font-bold ">Fans want to help </p>
            <p className=" text-center">
              {" "}
              your fans are available for you to help you{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white containor mx-auto pb-32 pt-14  flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center mb-14">
          Learn more about us{" "}
        </h1>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QtaorVNAwbI?si=262UF0V8NnHQ767A"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
