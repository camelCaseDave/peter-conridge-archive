import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Button from "@components/Button";
import Gallery from "@components/Gallery";
import Welcome from "@components/Welcome";
import landscape from "../public/wide-landscape.jpg";
import BackgroundImage from "@components/BackgroundImage";
import history from "../public/history.jpg";
import adventure from "../public/adventure.JPG";
import questionable from "../public/questionable.JPG";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Peter Conridge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title={"Peter Conridge"} />
        <div className="content">
          <div className="container-wrapper">
            <Welcome />
          </div>
        </div>
        <Header title={"The Meeting of the Waters"} dark />
        <div className="content dark gallery-container">
          <div className="container-wrapper">
            <Gallery title={"History"} src={history.src} />
          </div>
        </div>
        <div className="content light gallery-container">
          <div className="container-wrapper">
            <Gallery title={"Culture"} src={questionable.src} />
          </div>
        </div>
        <div className="content dark gallery-container gallery-bottom">
          <div className="container-wrapper">
            <Gallery title={"Adventure"} src={adventure.src} />
          </div>
        </div>
        <div className="subtitle subtitle-upper dark fancy">
          ... from the source of The River Exe to the sea
        </div>
        <div className="book-container">
          <BackgroundImage image={landscape}>
            <div className="overlay top-border">
              <Button
                className="chapter-download"
                src="chapter-one.pdf"
                text="Click here to explore Chapter One"
              />
            </div>
          </BackgroundImage>
        </div>
      </main >
    </div >
  );
}
