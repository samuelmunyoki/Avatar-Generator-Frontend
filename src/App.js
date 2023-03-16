import "./App.css";
import logo from "./assets/logo.png";
import avatar from "./assets/avatar.png";
function App() {
  return (
    <div className="bg-[#e7e9eb] flex flex-col w-screen h-screen fixed">
      <div className=" h-[50px] w-full bg-[#CED2D6] flex flex-row px-[260px] items-center">
        <img src={logo} alt="logo" className="w-[160px] h-[30px]" />

        <div className="flex flex-row items-center w-full justify-between font-bold text-primary700 text-[14px]">
          <div className="flex flex-row items-center gap-5 pl-[40px]">
            <p>How To</p>
            <p>Benefits</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          <div className="flex flex-row items-center gap-5">
            <p className="cursor-pointer hover:primary600">Sign In</p>
            <button className="bg-alternative900 rounded-sm px-[15px] py-[5px] text-[#ffffff] rounded-[5px] cursor-pointer hover:bg-alternative600 font-bold">
              Become a Member
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center  h-full px-[260px] justify-between">
        <div className="flex flex-col relative justify-between gap-y-5">
          <div className="h-full">
            <div className="back text-[180px] font-extrabold">AVATAR</div>
            <img src={logo} alt="logo" className="w-[500px]" />
          </div>
          <p className="w-[500px] text-primary700 font-semibold">
            Get creative and create your avatars in the blink of an eye with
            AvatarGen's AI-powered generator. Our AI technology is reliable and
            makes creating an avatar easy. Download your avatars in a range of
            formats, like jpeg and png!
          </p>
          <button className="bg-alternative900 px-[15px] py-[5px] text-[#ffffff] rounded-[5px] w-[280px] cursor-pointer hover:bg-alternative600 font-bold">
            Get Started
          </button>
        </div>
        <img src={avatar} alt="logo" className="h-[400px] " />
      </div>
      <div className="h-[1px] bg-[#858F9A] w-full "></div>
      <div className="flex flex-row items-center w-full justify-between text-center py-5 text-primary600 font-weight-400 text-[14px] px-[260px]">
        <p>
          www.avatargen.com
          <br />
          email.avatargen@gmail.com
          <br />
          P.O Box 64 - 9200<br></br>Kitui{" "}
        </p>
        <p>
          Our Terms & Conditions
          <br />
          Privacy Terms
          <br />
          2023
          <br />
          --
        </p>
      </div>
    </div>
  );
}

export default App;
