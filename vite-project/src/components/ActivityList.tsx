import React from "react";
import ActivityItem from "./ActivityItem";

interface Activity {
  name: string;
  date: string;
  location: string;
}

interface ActivityListProps {
  activities: Activity[]; // Lista över aktiviteter
  onRemoveActivity: (index: number) => void; // Funktion för att ta bort aktivitet
}

const ActivityList: React.FC<ActivityListProps> = ({
  activities,
  onRemoveActivity,
}) => {
  return (
    <div>
      <h2>Lista över aktiviteter</h2> {}
      <ul>
        {activities.length > 0 ? (
          activities.map((activity, index) => (
            <ActivityItem
              key={index}
              activity={activity}
              onRemove={() => onRemoveActivity(index)} // Funktion för att ta bort aktiviteten
            />
          ))
        ) : (
          <li>Inga aktiviteter tillagda.</li>
        )}
      </ul>
    </div>
  );
};

export default ActivityList;
