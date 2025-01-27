import { Activity } from "./ActivityForm.tsx";

const LOCAL_STORAGE_KEY = "activities";

// Hämta lagrade aktiviteter från localStorage
export const loadActivities = () => {
  const storedActivities = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedActivities ? (JSON.parse(storedActivities) as Activity[]) : [];
};

// Spara aktiviteter till localStorage
export const saveActivities = (activities: Activity[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(activities));
};
