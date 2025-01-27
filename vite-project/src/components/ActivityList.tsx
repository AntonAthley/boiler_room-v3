import React from "react";
import ActivityItem from "./ActivityItem";
import { Activity } from "./ActivityForm.tsx";

interface ActivityListProps {
  activities: Activity[]; // Lista över aktiviteter
  onRemoveActivity: (id: string) => void; // Funktion för att ta bort aktivitet
  onToggleComplete: (id: string) => void; // Funktion för att markera aktivitet som klar
  onEditActivity: (id: string, updatedActivity: Partial<Activity>) => void; // Funktion för att redigera aktivitet
}

const ActivityList: React.FC<ActivityListProps> = ({
  activities,
  onRemoveActivity,
  onToggleComplete,
  onEditActivity,
}) => {
  return (
    <div>
      <h2>Lista över aktiviteter</h2>
      <ul>
        {activities.length > 0 ? (
          activities.map((activity) => (
            <ActivityItem
              key={activity.id}
              activity={activity}
              onRemove={() => onRemoveActivity(activity.id)}
              onToggleComplete={() => onToggleComplete(activity.id)}
              onEdit={(updatedActivity) =>
                onEditActivity(activity.id, updatedActivity)
              }
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
