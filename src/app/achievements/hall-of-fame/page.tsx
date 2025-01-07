import Image, { StaticImageData } from "next/image";
import zube from "../../../assets/winnerImages/zube.png";
import roarosa from "../../../assets/winnerImages/roarosa.png";
import jdan from "../../../assets/winnerImages/jdan.png";

type Winner = {
  name: string;
  time: string;
  quote: string;
  image: StaticImageData;
  width: number;
};

const WINNERS: Winner[] = [
  {
    name: "roarosa",
    time: "WORLD RECORD: 25 seconds",
    quote: "I am a master of foolhardy plans.",
    image: roarosa,
    width: 50,
  },
  {
    name: "zube",
    time: "31 seconds",
    quote: "Hate me or love me, you all watched. That's all you could do.",
    image: zube,
    width: 30,
  },
  {
    name: "jdan",
    time: "3 milliseconds (CHEATER)",
    quote: "I earned this.",
    image: jdan,
    width: 60,
  },
];

export default function HallOfFame() {
  return (
    <div className="text-container">
      {WINNERS.map((winner, idx) => (
        <>
          <div className="winner" key={`winner-${idx}`}>
            <Image
              src={winner.image.src}
              alt={winner.name}
              width={winner.width}
              height={(winner.image.height / winner.image.width) * winner.width}
            />
            <p className="winner-name">
              #{idx + 1} {winner.name}
            </p>
            <p className="winner-flavor">{winner.time}</p>
            <p className="winner-flavor">{winner.quote}</p>
          </div>
          <br />
          <br />
        </>
      ))}
    </div>
  );
}
