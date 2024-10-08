import greenpeaceArticleImage from "./bilder/komprimiert/greenpeace-plan-berlin-min.jpg";

export type Article = {
  title: string;
  description: string;
  source: string;
  date: string;
  author: string;
  image: string;
  imageAlt: string;
};

export const articles: Article[] = [
  {
    title:
      "Plastik-Verpackungen vermeiden: Zwei Schwestern probieren den Plastik-Verzicht",
    description:
      'Wie schwer ist es, Plastik-Verpackungen und anderen Abfall zu vermeiden? Die Schwestern Frida, 13, und Helene, 10, haben es für "Dein SPIEGEL" eine Woche lang ausprobiert.',
    source:
      "https://www.spiegel.de/deinspiegel/plastik-verpackungen-vermeiden-zwei-schwester-probieren-den-plastik-verzicht-a-00000000-0002-0001-0000-000169777622",
    date: "16.04.2020",
    author: "Dein Spiegel",
    image:
      "https://cdn.prod.www.spiegel.de/images/b6ccfc1d-5b7b-4441-9be0-092ec1fb8e5b_w1280_r1.77_fpx54.66_fpy50.jpg",
    imageAlt: "Zwei Schwestern probieren den Plastik-Verzicht",
  },
  {
    title: "Beachvolleyballer gegen Müll im Meer: „Es ist nach fünf vor zwölf“",
    description:
      "Der Beachvolleyballer und Tauchlehrer Tim Noack widmet sich dem Kampf gegen Plastikmüll im Meer. Im Interview spricht er über sein Projekt und die Frage, was „normal“ ist.",
    source:
      "https://www.faz.net/aktuell/gesellschaft/wie-beachvolleyballer-noack-gegen-plastikmuell-im-meer-kaempft-16662283.html",
    date: "23.04.2020",
    author: "Achim Dreis",
    image:
      "https://media0.faz.net/ppmedia/aktuell/sport/2634673300/1.6664824/facebook_teaser/bedenkliche-entwicklung-man.jpg",
    imageAlt: "Taucher unter Wasser inmitten von Plastik",
  },
  {
    title: "DHDL-Startup: Mit Mode aus Meeresmüll in der „Höhle der Löwen“",
    description:
      "Das Wiener Startup Margaret and Hermione bietet Bikinis und Sportkleidung aus recyceltem Plastik an. Gründerin Barbara Gölles will damit bei den DHDL-Juroren punkten.",
    source: "https://www.gruenderszene.de/media/margaret-and-hermione-dhdl",
    date: "07.04.2020",
    author: "Pauline Schnor",
    image:
      "http://www.gruenderszene.de/wp-content/uploads/2020/04/margaret.jpg",
    imageAlt: "Mit Mode aus Meeresmüll in der Höhle der Löwen",
  },
  {
    title:
      "Einfrieren ganz OHNE Plastik: DESHALB sollten Sie Ihr Essen nie in Plastikdosen einfrieren",
    description:
      "Einfrieren ist die beste Methode, um fertige Speisen oder angebrochene Lebensmittel haltbar zu machen, wenn man sie nicht zeitnah aufbrauchen kann. Viele Verbraucher greifen dann zu Plastikdosen. Doch das ist nicht unbedingt die gesündeste Methode.",
    source:
      "https://www.news.de/gesundheit/855824794/einfrieren-in-plastikdosen-gefaehrlich-fuer-gesundheit-essensreste-und-fleisch-einfrieren-ohne-plastik-in-glas-alternativen/1/",
    date: "13.02.2020",
    author: "Anika Bube",
    image:
      "https://media.news.de/resources/thumbs/59/28/857092753_736x414/adobestockhedgehogjpeg-1581070891.jpg",
    imageAlt: "Plastikdosen sind nicht immer die richtige Wahl zum Einfrieren.",
  },
  {
    title: "Ein Plan gegen Plastik",
    description:
      "Das gab’s noch nie: In Berlin stellt ein breites Bündnis der Zivilgesellschaft Wege aus der Plastikkrise vor. Die Regierung muss handeln, so Greenpeace und andere Organisationen.",
    source:
      "https://www.greenpeace.de/themen/endlager-umwelt/plastikmuell/ein-plan-gegen-plastik",
    date: "05.02.2020",
    author: "Michael Weiland Greenpeace",
    image: greenpeaceArticleImage.src,
    imageAlt: "Gruppenbild vor der Pressekonferenz",
  },
  {
    title: "Autofrei und plastikfrei: Umweltbewusst ins neue Jahr 2020",
    description:
      "Umweltbewusst und achtsam ins neue Jahr! So gelingt Ihnen der Umstieg zum autofreien, plastikfreien und umweltbewussten Leben.",
    source:
      "https://www.news.de/panorama/855811087/autofrei-und-plastikfrei-umweltbewusst-ins-neue-jahr-reduzieren-sie-stressfaktoren-fuer-die-umwelt-und-sich-selber/1/",
    date: "23.12.2019",
    author: "News.de",
    image:
      "https://media.news.de/resources/thumbs/1e/62/857065171_736x414/stressfaktoren-belasten-die-umwelt-und-sie-selber-1576169651.jpg",
    imageAlt: "Stressfaktoren belasten die Umwelt und Sie selber",
  },
];
