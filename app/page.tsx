"use client";
import Card from "@/components/Card";
import Slider from "@/components/Slider";
import juice from "@/public/juice-big.png";
import shoe from "@/public/shoe.png";
import sticker from "@/public/Sticker.png";

export default function Home() {
  let cards = [
    {
      key: 1,
      content: <Card imagen="/Crisp 1.png" />,
    },
    {
      key: 2,
      content: <Card imagen="/lego2.png" />,
    },
    {
      key: 3,
      content: <Card imagen={juice} />,
    },
    {
      key: 4,
      content: <Card imagen={shoe} />,
    },
    {
      key: 5,
      content: <Card imagen={sticker} />,
    },
  ];
  return (
    <main className="flex flex-col justify-center relative w-full h-full min-h-screen mx-auto">
      <Slider
        cards={cards}
        height="500px"
        width="100%"
        margin="0 auto"
        offset={200}
        showArrows={false}
      />
    </main>
  );
}
