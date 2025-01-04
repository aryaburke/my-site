import Image from "next/image";
import zube from "../../../assets/winnerImages/zube.png";

type Winner = {
  name: string;
  time: string;
  imageSrc: string;
  quote: string;
};

const WINNERS: Winner[] = [
  {
    name: "zube",
    time: "WORLD RECORD: 31 seconds",
    imageSrc: zube.src,
    quote: "Hate me or love me, you all watched. That's all you could do.",
  },
];

export default function HallOfFame() {
  return (
    <div className="text-container">
      {WINNERS.map((winner, idx) => (
        <div className="winner">
          <Image
            src={winner.imageSrc}
            alt={winner.name}
            width={30}
            height={30}
          />
          <p className="winner-name">
            #{idx + 1} {winner.name}
          </p>
          <p className="winner-flavor">{winner.time}</p>
          <p className="winner-flavor">{winner.quote}</p>
        </div>
      ))}
    </div>
  );
}
