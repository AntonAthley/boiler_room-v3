import React, { useState } from "react";

// Grundläggande typ för en aktivitet
export interface Activity {
  id: string;
  name: string;
  date: string;
  location: string;
  completed: boolean;
}

interface ActivityFormProps {
  onAddActivity: (activity: Activity) => void;
}

const ActivityForm: React.FC<ActivityFormProps> = ({ onAddActivity }) => {
  // State för formulärets fält
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && date && location) {
      // Skapa ny aktivitet med unikt ID
      const newActivity: Activity = {
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        name,
        date,
        location,
        completed: false,
      };
      onAddActivity(newActivity);
      // Återställ formuläret
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
