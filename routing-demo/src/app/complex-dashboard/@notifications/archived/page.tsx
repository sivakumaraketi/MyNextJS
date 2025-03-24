import Card from "@/app/components/card";
import Link from "next/link";

const ArchivedNotifications = () => {
  return (
    <Card>
      <h1>Archived Notifications</h1>
      <div><Link href={'/complex-dashboard'}>Default</Link></div>
    </Card>
  );
}
export default ArchivedNotifications;