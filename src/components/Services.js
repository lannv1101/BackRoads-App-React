import Title from "./Title";
import { services } from "../Data";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="services" subTitle="us" />

      <div className="section-center services-center">
        {services.map((services) => {
          return <Service key={services.id} {...services}/>
        })}
      </div>
    </section>
  );
};

export default Services;
