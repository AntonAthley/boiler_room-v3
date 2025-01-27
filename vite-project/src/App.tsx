import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ActivityForm, { Activity } from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";
import { loadActivities, saveActivities } from "./components/LocalStorage";

const App: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Ladda aktiviteter när appen startar
  useEffect(() => {
    try {
      const storedActivities = loadActivities();
      setActivities(storedActivities);
    } catch (err) {
      setError("Kunde inte ladda aktiviteter");
    } finally {
      setLoading(false);
    }
  }, []);

  // Spara aktiviteter automatiskt när de ändras
  useEffect(() => {
    if (!loading) {
      saveActivities(activities);
    }
  }, [activities, loading]);

  // Hantera tillägg av ny aktivitet
  const addActivity = (activity: Activity) => {
    setActivities((prev) => [...prev, activity]);
  };

  // Ta bort aktivitet med specifikt ID
  const removeActivity = (id: string) => {
    setActivities((prev) => prev.filter((activity) => activity.id !== id));
  };

  // Växla aktivitetens status mellan klar/ej klar
  const toggleComplete = (id: string) => {
    setActivities((prev) =>
      prev.map((activity) =>
        activity.id === id
          ? { ...activity, completed: !activity.completed }
          : activity
      )
    );
  };

  // Uppdatera en befintlig aktivitet
  const editActivity = (id: string, updatedActivity: Partial<Activity>) => {
    setActivities((prev) =>
      prev.map((activity) =>
        activity.id === id ? { ...activity, ...updatedActivity } : activity
      )
    );
  };

  // Sortera aktiviteter efter datum
  const sortedActivities = [...activities].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateA - dateB;
  });

  if (loading) return <div>Laddar...</div>;
  if (error) return <div>Fel: {error}</div>;

  return (
    <div>
      <Header />
      <ActivityForm onAddActivity={addActivity} />
      <ActivityList
        activities={sortedActivities}
        onRemoveActivity={removeActivity}
        onToggleComplete={toggleComplete}
        onEditActivity={editActivity}
      />
    </div>
  );
};

export default App;
