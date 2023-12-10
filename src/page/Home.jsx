import { useState } from "react";
import Input from "../components/ui/Input";
import Helmet from "../components/Helmet";

const Home = () => {
  const [teh, setTeh] = useState(0);
  const [tambahTeh, setTambahTeh] = useState(0);
  const [LakuTeh, setLakuTeh] = useState(0);
  const [es, setEs] = useState(0);
  const [tambahEs, setTambahEs] = useState(0);
  const [LakuEs, setLakuEs] = useState(0);
  const [cb, setCb] = useState(0);
  const [tambahCb, setTambahCb] = useState(0);
  const [LakuCb, setLakuCb] = useState(0);
  const [creamer, setCreamer] = useState(0);
  const [tambahCreamer, setTambahCreamer] = useState(0);
  const [LakuCreamer, setLakuCreamer] = useState(0);
  const [lemonTea, setLemonTea] = useState(0);
  const [tambahLemonTea, setTambahLemonTea] = useState(0);
  const [LakuLemonTea, setLakuLemonTea] = useState(0);

  const sisaTeh = Number(teh) + Number(tambahTeh) - LakuTeh;
  const sisaEs = Number(es) + Number(tambahEs) - LakuEs;
  const sisaCb = Number(cb) + Number(tambahCb) - LakuCb;
  const sisaCreamer = Number(creamer) + Number(tambahCreamer) - LakuCreamer;
  const sisaLemonTea = Number(lemonTea) + Number(tambahLemonTea) - LakuLemonTea;

  return (
    <Helmet title="Home">
      <section className="my-8 mb-24">
        <form>
          <div className="flex flex-wrap gap-6 justify-center">
            <Input
              component={"Teh"}
              bawa={(e) => setTeh(e.target.value)}
              laku={(e) => setLakuTeh(e.target.value)}
              tambah={(e) => setTambahTeh(e.target.value)}
              sisa={sisaTeh}
            />
            <Input
              component={"Es"}
              bawa={(e) => setEs(e.target.value)}
              laku={(e) => setLakuEs(e.target.value)}
              tambah={(e) => setTambahEs(e.target.value)}
              sisa={sisaEs}
            />
            <Input
              component={"CB"}
              bawa={(e) => setCb(e.target.value)}
              laku={(e) => setLakuCb(e.target.value)}
              tambah={(e) => setTambahCb(e.target.value)}
              sisa={sisaCb}
            />
            <Input
              component={"Creamer"}
              bawa={(e) => setCreamer(e.target.value)}
              laku={(e) => setLakuCreamer(e.target.value)}
              tambah={(e) => setTambahCreamer(e.target.value)}
              sisa={sisaCreamer}
            />
            <Input
              component={"Lemon Tea"}
              bawa={(e) => setLemonTea(e.target.value)}
              laku={(e) => setLakuLemonTea(e.target.value)}
              tambah={(e) => setTambahLemonTea(e.target.value)}
              sisa={sisaLemonTea}
            />
          </div>
        </form>
      </section>
    </Helmet>
  );
};

export default Home;
