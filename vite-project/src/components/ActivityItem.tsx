import React from "react";

interface Activity {
  name: string;
  date: string;
  location: string;
}

interface ActivityItemProps {
  activity: Activity;
  onRemove: () => void;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ activity, onRemove }) => {
  return (
    <li>
      {/* Aktivitetens namn */}
      <strong>{activity.name}</strong> - {activity.date} - {activity.location}
      {/* Knapp för att ta bort aktiviteten */}
      <button onClick={onRemove} style={{ marginLeft: "10px" }}>
        Ta bort
      </button>{" "}
      {}
    </li>
  );
};

export default ActivityItem;
