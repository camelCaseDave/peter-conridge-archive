import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Avatar from "@components/Avatar";
import Button from "@components/Button";
import Gallery from "@components/Gallery";
import Welcome from "@components/Welcome";
import landscape from "../public/wide-landscape.jpg";
import BackgroundImage from "@components/BackgroundImage";

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
            <Avatar />
          </div>
        </div>
        <Header title={"The Meeting of the Waters"} dark />
        <div className="subtitle subtitle-upper dark fancy">
          ... a journey from the source of The River Exe to the sea
        </div>
        <div className="content dark gallery-container">
          <div className="container-wrapper">
            <Gallery />
          </div>
        </div>
        <div className="book-container">
          <BackgroundImage image={landscape}>
            <div className="container-wrapper overlay top-border">
              <Button
                className="chapter-download"
                src="chapter-one.pdf"
                text="Explore Chapter One"
              />
            </div>
          </BackgroundImage>
        </div>
        <div className="container-wrapper">
          <Footer />
        </div>
      </main>
    </div>
  );
}
