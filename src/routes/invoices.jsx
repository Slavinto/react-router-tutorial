import { getInvoices } from "../data/data.js";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

const Invoices = () => {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            return filter ? setSearchParams({ filter }) : setSearchParams({});
          }}
        />
        {invoices
          .filter(({ name }) => {
            let filter = searchParams.get("filter");
            return name.toLowerCase().includes(filter) || !filter
              ? true
              : false;
          })
          .map(({ name, number }) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                };
              }}
              to={`/invoices/${number}`}
              key={number}
            >
              {name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Invoices;
