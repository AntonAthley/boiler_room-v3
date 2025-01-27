import React, { useState } from "react";
import { Activity } from "./ActivityForm.tsx";

interface ActivityItemProps {
  activity: Activity;
  onRemove: () => void;
  onToggleComplete: () => void;
  onEdit: (updatedActivity: Partial<Activity>) => void;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  activity,
  onRemove,
  onToggleComplete,
  onEdit,
}) => {
  // State för redigeringsläge
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(activity.name);
  const [editedDate, setEditedDate] = useState(activity.date);
  const [editedLocation, setEditedLocation] = useState(activity.location);

  // Spara ändringar och avsluta redigeringsläge
  const handleSave = () => {
    onEdit({
      name: editedName,
      date: editedDate,
      location: editedLocation,
    });
    setIsEditing(false);
  };

  // Visa redigeringsformulär om isEditing är true
  if (isEditing) {
    return (
      <li className="activity-item">
        <div className="input-group">
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            placeholder="Aktivitetsnamn"
          />
          <input
            type="date"
            value={editedDate}
            onChange={(e) => setEditedDate(e.target.value)}
          />
          <input
            type="text"
            value={editedLocation}
            onChange={(e) => setEditedLocation(e.target.value)}
            placeholder="Plats"
          />
        </div>
        <div className="activity-buttons">
          <button onClick={handleSave}>Spara</button>
          <button onClick={() => setIsEditing(false)}>Avbryt</button>
        </div>
      </li>
    );
  }

  // Visa normal vy
  return (
    <li
      className={`activity-item ${activity.completed ? "completed" : ""}`}
      onClick={onToggleComplete}
    >
      <span className="activity-content">
        <strong>{activity.name}</strong> - {activity.date} - {activity.location}
      </span>
      <div className="activity-buttons">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsEditing(true);
          }}
        >
          Redigera
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
        >
          Ta bort
        </button>
      </div>
    </li>
  );
};

export default ActivityItem;
