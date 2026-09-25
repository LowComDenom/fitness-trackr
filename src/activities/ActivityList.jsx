import { useAuth } from "../auth/AuthContext";

export default function ActivityList({ activities, deleteActivity, syncActivities }) {
  const { token } = useAuth()

  const handleDelete = async (id) => {
    try {
      await deleteActivity(token, id)
      syncActivities()
    } catch (e) {
      console.error(e)
    }
  }
  
  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>{activity.name} <button onClick={()=>handleDelete(activity.id)}>❌</button></li>
      ))}
    </ul>
  );
}
