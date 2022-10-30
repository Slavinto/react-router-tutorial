import { useParams } from "react-router-dom";
import { getInvoiceByNumber } from "../data/data.js";

const Invoice = () => {
  let params = useParams();
  const [{ name, number, amount, due }] = getInvoiceByNumber(params.invoiceId);
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {amount}</h2>
      <p>
        {name}: {number}
      </p>
      <p>Due Date: {due}</p>
    </main>
  );
};

export default Invoice;
