import { useState } from "react";
import { useCurrency } from "../hooks/useCurrency";
import InputCup from "../components/ui/InputCup";
import Helmet from "../components/Helmet";

const Calculator = () => {
  const [teh, setTeh] = useState(0);
  const [es, setEs] = useState(0);
  const [tc, setTc] = useState(0);
  const [sc, setSc] = useState(0);
  const [sl, setSl] = useState(0);

  const { rupiah } = useCurrency();

  const HasilTeh = teh * 4000;
  const HasilEs = es * 4000;
  const HasilTc = tc * 4000;
  const HasilSc = sc * 4000;
  const HasilSl = sl * 4000;

  const total = HasilTeh + HasilEs + HasilTc + HasilSc + HasilSl;

  return (
    <Helmet title="Calculator">
      <section className="my-8 ">
        <form>
          <InputCup
            label={"Teh"}
            harga={4000}
            hasil={rupiah(HasilTeh)}
            onchange={(e) => setTeh(e.target.value)}
          />
          <InputCup
            label={"Es Teh"}
            harga={4000}
            hasil={rupiah(HasilEs)}
            onchange={(e) => setEs(e.target.value)}
          />
          <InputCup
            label={"Teh Creamer"}
            harga={6000}
            hasil={rupiah(HasilTc)}
            onchange={(e) => setTc(e.target.value)}
          />
          <InputCup
            label={"Es Creamer"}
            harga={6000}
            hasil={rupiah(HasilSc)}
            onchange={(e) => setSc(e.target.value)}
          />
          <InputCup
            label={"Es Lemon Tea"}
            harga={6000}
            hasil={rupiah(HasilSl)}
            onchange={(e) => setSl(e.target.value)}
          />
          <p className="font-bold flex gap-4 justify-center mt-5 bg-red-700 text-white p-2 rounded-md">
            <span>Total:</span>
            {rupiah(total)}
          </p>
        </form>
      </section>
    </Helmet>
  );
};

export default Calculator;
