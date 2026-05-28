import TextPressure from "@/components/TextPressure";
import TextType from "@/components/TextType";
import Safari from "@/Windows/Safari";
import Terminal from "@/Windows/Terminal";
import Resume from "@/Windows/Resume";
import ResumeDA from "@/Windows/ResumeDA";
import Finder from "@/Windows/Finder";
import Text from "@/Windows/Text";
import Imager from "@/Windows/Imager";
import Contact from "@/Windows/Contact";
import Home from "@/components/Home";

const page = () => {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "30vw",
          textAlign: "center",
        }}
      >
        <TextPressure
          text="Hello!"
          flex
          alpha={false}
          stroke={false}
          width
          weight
          italic
          textColor="#ffffff"
          strokeColor="#5227FF"
          minFontSize={40}
        />
        <TextType
          text={["I am Karan,", "This is my Portfolio.", "Happy coding!"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="|"
          deletingSpeed={50}
          cursorBlinkDuration={0.5}
          className="text-type--hero"
        />
      </div>

      <Terminal />
      <Safari />
      <Resume />
      <ResumeDA/>
      <Finder />
      <Text />
      <Imager />
      <Contact />

      <Home />
    </div>
  );
};

export default page;
