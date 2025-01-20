const LOCAL_STORAGE_KEY = "activities";

export const loadActivities = () => {
  const storedActivities = localStorage.getItem(LOCAL_STORAGE_KEY); // Hämta lagrade aktiviteter
  return storedActivities ? JSON.parse(storedActivities) : []; // Återvänd aktiviteter eller tom array
};

export const saveActivities = (activities: any[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(activities)); // Spara aktiviteter
};
