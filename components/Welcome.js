import avatar from "../public/avatar.jpg";

export default function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome-content">
        <div className="welcome-text-inline">
          <p>I am not sure if the Poet, Philip Larkin was keen on outdoor swimming but he recognised the potential of <i>“a furious devout drench”</i> when he wrote:</p>
          <p className="quote">"If I were called in to construct a religion, I would make use of water”.</p>
        </div>
        <div className="avatar">
          <img src={avatar.src} />
        </div>
        <div className="welcome-text">
          <p>There are no shortages of beaches that lie within cycling reach of Hull, the city where he lived, worked and wrote ‘Here’, an account of a cycle ride to Spurn Head.
            No less, an inspiration for the spirit of adventure and in this case, appreciation for the pleasures of outdoor swimming are contained within Roger Deakin’s book: “Waterlog”.
          </p>
          <p>Both writers have been part of my desire to discover more fully the nature of rivers, lakes and pools and beaches on the many travels afforded me by the gift of retirement.
            This blessing has created the space to undertake many expeditions far and wide, but none more important than the shared odyssey travelling down
            The River Exe in my native county, Devonshire with my friend, Dr Charles Dixon. This river and my attempt at a book has become the cornerstone to similar enterprises undertaken over the years following on from this venture in 2017.
          </p
          ><p>My book is a humble offering towards this end but met with a familiar conclusion that others through spoken or written words have often expressed things to greater effect and none better than Matthew Arnold’s words: </p>
          <p className="quote">“It is no small thing to have enjoyed the sun. To have lived light in the spring, to have loved, to have thought. To have done”. </p>
        </div>
      </div>
    </div>
  );
}
