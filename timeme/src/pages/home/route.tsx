import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import styles from './YourPage.module.css';

interface FormState {
  day: string;
  name: string;
  time: string;
  category: string;
  start_time: string;
  date: string;
}

const YourPage: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    day: '',
    name: '',
    time: '',
    category: '',
    start_time: '',
    date: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('your-api-url-here', { data: form });
      console.log('API response:', response);
    } catch (error) {
      console.error('API request failed:', error);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        type="text"
        name="day"
        placeholder="Day"
        value={form.day}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="time"
        placeholder="Time"
        value={form.time}
        onChange={handleChange}
      />
      <select
        name="category"
        value={form.category}
        onChange={handleChange}
      >
        <option value="" disabled>Select category</option>
        <option value="school work">School Work</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
      </select>
      <input
        type="time"
        name="start_time"
        value={form.start_time}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default YourPage;
