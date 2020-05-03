import { images, animations } from "../assets";

export const templateList = [
  { url: images.team2 },
  { url: images.team3 },
  { url: images.team4 },
  { url: images.team5 },
  { url: images.team6 },
  { url: images.team7 },
  { url: images.team8 },
  { url: images.team9 },
];

export const tailorList = [
  { url: images.afri },
  { url: images.shoes },
  { url: images.wed },
  { url: images.suit },
  { url: images.afri },
  { url: images.shoes },
  { url: images.wed },
  { url: images.suit },
];

export const cards = [
  { url: images.card1 },
  { url: images.card2 },
  { url: images.card3 },
  { url: images.card4 },
  { url: images.card5 },
  { url: images.card6 },
  { url: images.card7 },
  { url: images.card8 },
  { url: images.card9 },
  { url: images.card10 },
  { url: images.card11 },
  { url: images.card12 },
];

export const steps = [
  { text: "Stay Home", animation: "stayHome" },
  { text: "Stay At Home", animation: "home" },
  { text: "Stay Safe", animation: "safe" },
  { text: "Wash Hands", animation: "wash2" },
  { text: "Wash hands", animation: "wash" },
  { text: "Social Distancing", animation: "distancing" },
  { text: "Report Symtoms", animation: "symtoms" },
  { text: "Use tissue", animation: "tissue" },
];

export const defaultAnimationOptions = (animation) => ({
  loop: true,
  autoplay: true,
  animationData: animations[animation],
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
});
