"use client";
import { useState, FormEvent } from "react";
import axios from "axios";
import Link from "next/link";
import styles from "./viewdata.module.css";
import NavBar from "../components/NavBar";

const DataPage: React.FC = () => {
  const [date, setDate] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get(`api/getTask?date=${date}`);
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.error("API request failed:", error);
    }
  };

  return (
    <>
    <NavBar />
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
        {data && (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Day</th>
                <th>Name</th>
                <th>Time</th>
                <th>Category</th>
                <th>Start Time</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.day}</td>
                  <td>{item.name}</td>
                  <td>{item.time}</td>
                  <td>{item.category}</td>
                  <td>{item.start_time}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <Link href="/">Back to Form</Link>
      </div>
    </div>
    </>
  );
};

export default DataPage;
