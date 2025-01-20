import React, { useState } from "react";

interface Activity {
  name: string;
  date: string;
  location: string;
}

interface ActivityFormProps {
  onAddActivity: (activity: Activity) => void;
}

const ActivityForm: React.FC<ActivityFormProps> = ({ onAddActivity }) => {
  // State för aktivitetens namn
  const [name, setName] = useState("");
  // State för aktivitetens datum
  const [date, setDate] = useState("");
  // State för aktivitetens plats
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Kontrollera att alla fält är ifyllda
    if (name && date && location) {
      const newActivity = { name, date, location };
      // Lägg till den nya aktiviteten
      onAddActivity(newActivity);
      // Återställ fälten
      setName("");
      setDate("");
      setLocation("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Aktivitetens namn"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Plats"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <button type="submit">Lägg till aktivitet</button>
    </form>
  );
};

export default ActivityForm;
