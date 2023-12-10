import { useState } from "react";
import Input from "../components/ui/Input";

const Home = () => {
  const [teh, setTeh] = useState(0);
  const [LakuTeh, setLakuTeh] = useState(0);
  const [es, setEs] = useState(0);
  const [LakuEs, setLakuEs] = useState(0);
  const [cb, setCb] = useState(0);
  const [LakuCb, setLakuCb] = useState(0);
  const [creamer, setCreamer] = useState(0);
  const [LakuCreamer, setLakuCreamer] = useState(0);
  const [lemonTea, setLemonTea] = useState(0);
  const [LakuLemonTea, setLakuLemonTea] = useState(0);

  const sisaTeh = teh - LakuTeh;
  const sisaEs = es - LakuEs;
  const sisaCb = cb - LakuCb;
  const sisaCreamer = creamer - LakuCreamer;
  const sisaLemonTea = lemonTea - LakuLemonTea;
  return (
    <section className="my-8 ">
      <form>
        <div className="flex flex-wrap gap-6 justify-center">
          <Input
            component={"Teh"}
            bawa={(e) => setTeh(e.target.value)}
            laku={(e) => setLakuTeh(e.target.value)}
            sisa={LakuTeh > 0 ? sisaTeh : 0}
          />
          <Input
            component={"Es"}
            bawa={(e) => setEs(e.target.value)}
            laku={(e) => setLakuEs(e.target.value)}
            sisa={LakuEs > 0 ? sisaEs : 0}
          />
          <Input
            component={"CB"}
            bawa={(e) => setCb(e.target.value)}
            laku={(e) => setLakuCb(e.target.value)}
            sisa={LakuCb > 0 ? sisaCb : 0}
          />
          <Input
            component={"Creamer"}
            bawa={(e) => setCreamer(e.target.value)}
            laku={(e) => setLakuCreamer(e.target.value)}
            sisa={LakuCreamer > 0 ? sisaCreamer : 0}
          />
          <Input
            component={"Lemon Tea"}
            bawa={(e) => setLemonTea(e.target.value)}
            laku={(e) => setLakuLemonTea(e.target.value)}
            sisa={LakuLemonTea > 0 ? sisaLemonTea : 0}
          />
        </div>
      </form>
    </section>
  );
};

export default Home;
