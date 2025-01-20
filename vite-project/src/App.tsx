import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";
import { loadActivities, saveActivities } from "./components/LocalStorage";

interface Activity {
  name: string;
  date: string;
  location: string;
}

const App: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const storedActivities = loadActivities();
    setActivities(storedActivities);
  }, []);

  const addActivity = (activity: Activity) => {
    const updatedActivities = [...activities, activity];
    setActivities(updatedActivities);
    saveActivities(updatedActivities);
  };

  const removeActivity = (index: number) => {
    const updatedActivities = activities.filter((_, i) => i !== index);
    setActivities(updatedActivities);
    saveActivities(updatedActivities);
  };

  return (
    <div>
      <Header />
      <ActivityForm onAddActivity={addActivity} />
      <ActivityList activities={activities} onRemoveActivity={removeActivity} />
    </div>
  );
};

export default App;
