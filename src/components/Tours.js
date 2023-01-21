import Title from "./Title";
import { tours } from "../Data";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="features" subTitle="us" />

      <div className="section-center featured-center">
        {tours.map((data) => {
          return <Tour key={data.id} {...data}/>
        })}
      </div>
    </section>
  );
};

export default Tours;
