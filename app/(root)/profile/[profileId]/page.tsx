import { ProfilePage } from "./profile-page";

export default async function ProfilePageWrapper(props: {
  params: Promise<{ profileId: string }>;
}) {
  const { profileId } = await props.params;
  return <ProfilePage profileId={profileId} />;
}
