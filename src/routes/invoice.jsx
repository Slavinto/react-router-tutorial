import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getInvoiceByNumber, deleteInvoice } from "../data/data.js";

const Invoice = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();

  const [{ name, number, amount, due }] = getInvoiceByNumber(params.invoiceId);
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {amount}</h2>
      <p>
        {name}: {number}
      </p>
      <p>Due Date: {due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(number);
            navigate("/invoices" + location.search);
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
};

export default Invoice;
