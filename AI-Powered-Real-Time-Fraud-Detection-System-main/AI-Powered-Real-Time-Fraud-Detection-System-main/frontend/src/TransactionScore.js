// import React, { useState } from "react";
// import axios from "axios";

// const initialData = {
//   account_id: "frontend_test_001",
//   TransactionAmount: 350.25,
//   CustomerAge: 27,
//   TransactionDuration: 4.2,
//   LoginAttempts: 2,
//   AccountBalance: 8000.0,
//   user_transaction_count: 12,
//   user_avg_transaction_amount: 300.0,
//   deviation_from_user_avg: 50.25,
//   transaction_hour: 16,
//   transaction_day_of_week: 3,
//   TransactionType: "Credit",
//   Location: "Los Angeles",
//   Channel: "Web",
//   CustomerOccupation: "Designer",
//   user_primary_location: "Los Angeles",
//   is_unusual_location: "False"
// };

// export default function TransactionScore() {
//   const [form, setForm] = useState(initialData);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setResult(null);
//     setError(null);
//     try {
//       const response = await axios.post("http://127.0.0.1:8000/transactions/score", {
//         ...form,
//         TransactionAmount: parseFloat(form.TransactionAmount),
//         CustomerAge: parseInt(form.CustomerAge),
//         TransactionDuration: parseFloat(form.TransactionDuration),
//         LoginAttempts: parseInt(form.LoginAttempts),
//         AccountBalance: parseFloat(form.AccountBalance),
//         user_transaction_count: parseFloat(form.user_transaction_count),
//         user_avg_transaction_amount: parseFloat(form.user_avg_transaction_amount),
//         deviation_from_user_avg: parseFloat(form.deviation_from_user_avg),
//         transaction_hour: parseInt(form.transaction_hour),
//         transaction_day_of_week: parseInt(form.transaction_day_of_week)
//       });
//       setResult(response.data);
//     } catch (err) {
//       setError(err.response ? err.response.data : err.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Score a Transaction</h2>
//       <form onSubmit={handleSubmit}>
//         {Object.keys(initialData).map((key) => (
//           <div key={key}>
//             <label>
//               {key}:{" "}
//               <input
//                 name={key}
//                 value={form[key]}
//                 onChange={handleChange}
//                 type={typeof initialData[key] === "number" ? "number" : "text"}
//               />
//             </label>
//           </div>
//         ))}
//         <button type="submit">Score Transaction</button>
//       </form>
//       {result && (
//         <div>
//           <h3>Result</h3>
//           <pre>{JSON.stringify(result, null, 2)}</pre>
//         </div>
//       )}
//       {error && (
//         <div style={{ color: "red" }}>
//           <h3>Error</h3>
//           <pre>{JSON.stringify(error, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import axios from "axios";

const initialData = {
  account_id: "frontend_test_001",
  TransactionAmount: 350.25,
  CustomerAge: 27,
  TransactionDuration: 4.2,
  LoginAttempts: 2,
  AccountBalance: 8000.0,
  user_transaction_count: 12,
  user_avg_transaction_amount: 300.0,
  deviation_from_user_avg: 50.25,
  transaction_hour: 16,
  transaction_day_of_week: 3,
  TransactionType: "Credit",
  Location: "Los Angeles",
  Channel: "Web",
  CustomerOccupation: "Designer",
  user_primary_location: "Los Angeles",
  is_unusual_location: "False"
};

export default function TransactionScore() {
  const [form, setForm] = useState(initialData);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(null);
    setError(null);
    try {
      const response = await axios.post("http://127.0.0.1:8000/transactions/score", {
        ...form,
        TransactionAmount: parseFloat(form.TransactionAmount),
        CustomerAge: parseInt(form.CustomerAge),
        TransactionDuration: parseFloat(form.TransactionDuration),
        LoginAttempts: parseInt(form.LoginAttempts),
        AccountBalance: parseFloat(form.AccountBalance),
        user_transaction_count: parseFloat(form.user_transaction_count),
        user_avg_transaction_amount: parseFloat(form.user_avg_transaction_amount),
        deviation_from_user_avg: parseFloat(form.deviation_from_user_avg),
        transaction_hour: parseInt(form.transaction_hour),
        transaction_day_of_week: parseInt(form.transaction_day_of_week)
      });
      setResult(response.data);
    } catch (err) {
      setError(err.response ? err.response.data : err.message);
    }
  };

  return (
    // <div>
    //   <h2>Score a Transaction</h2>
    //   <form onSubmit={handleSubmit}>
    //     {Object.keys(initialData).map((key) => (
    //       <div key={key}>
    //         <label>
    //           {key}:{" "}
    //           <input
    //             name={key}
    //             value={form[key]}
    //             onChange={handleChange}
    //             type={typeof initialData[key] === "number" ? "number" : "text"}
    //           />
    //         </label>
    //       </div>
    //     ))}
    //     <button type="submit">Score Transaction</button>
    //   </form>
    //   {result && (
    //     <div>
    //       <h3>Result</h3>
    //       <pre>{JSON.stringify(result, null, 2)}</pre>
    //     </div>
    //   )}
    //   {error && (
    //     <div style={{ color: "red" }}>
    //       <h3>Error</h3>
    //       <pre>{JSON.stringify(error, null, 2)}</pre>
    //     </div>
    //   )}
    // </div>


<div
  style={{
    maxWidth: "700px",
    margin: "40px auto",
    padding: "25px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  }}
>
  <h2
    style={{
      textAlign: "center",
      marginBottom: "20px",
      color: "#333",
      fontSize: "26px",
    }}
  >
    Score a Transaction
  </h2>

  <form
    onSubmit={handleSubmit}
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "15px",
    }}
  >
    {Object.keys(initialData).map((key) => (
      <div key={key} style={{ display: "flex", flexDirection: "column" }}>
        <label style={{ fontWeight: "600", marginBottom: "6px" }}>
          {key}
        </label>

        <input
          name={key}
          value={form[key]}
          onChange={handleChange}
          type={typeof initialData[key] === "number" ? "number" : "text"}
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
        />
      </div>
    ))}

    {/* BUTTONS */}
    <div
      style={{
        gridColumn: "span 2",
        textAlign: "center",
        marginTop: "10px",
      }}
    >
      <button
        type="submit"
        style={{
          padding: "10px 18px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontWeight: "600",
          cursor: "pointer",
          fontSize: "15px",
          marginRight: "10px",
        }}
      >
        Score Transaction
      </button>

      <button
        type="button"
        style={{
          padding: "10px 18px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontWeight: "600",
          cursor: "pointer",
          fontSize: "15px",
        }}
        onClick={() => {
          setForm(initialData);
          setResult(null);
          setError(null);
        }}
      >
        Reset
      </button>
    </div>
  </form>

  {result && (
    <div
      style={{
        marginTop: "25px",
        padding: "15px",
        background: "#f8f9fa",
        borderLeft: "5px solid #28a745",
        borderRadius: "6px",
      }}
    >
      <h3>Result</h3>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  )}

  {error && (
    <div
      style={{
        marginTop: "25px",
        padding: "15px",
        background: "#f8d7da",
        borderLeft: "5px solid red",
        borderRadius: "6px",
        color: "#721c24",
      }}
    >
      <h3>Error</h3>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  )}
</div>


  );
}