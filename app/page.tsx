"use client";
import Card from "@/components/Card";
import Slider from "@/components/Slider";


export default function Home() {
  let cards = [
    {
      key: 1,
      content: (
        <Card imagen="/Crsip 1.png" />
      ),
    },
    {
      key: 2,
      content: (
        <Card imagen="/juice-big.png" />
      ),
    },
    {
      key: 3,
      content: (
        <Card imagen="/lego2.png" />
      ),
    },
    {
      key: 4,
      content: (
        <Card imagen="/shoe.png" />
      ),
    },
    {
      key: 5,
      content: (
        <Card imagen="/Sticker.png" />
      ),
    },
  ];
  return (
    <main className="flex flex-col items-center justify-center min-h-[100vh] max-w-7xl mx-auto w-full">
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
