import Carousel from "./Carousel";

const images = [
  "https://placehold.co/600x400?text=Image+1",
  "https://placehold.co/600x400?text=Image+2",
  "https://placehold.co/600x400?text=Image+3",
  "https://placehold.co/600x400?text=Image+4",
  "https://placehold.co/600x400?text=Image+5",
  "https://placehold.co/600x400?text=Image+6",
];

function App() {
  return <Carousel images={images} />;
}

export default App;
