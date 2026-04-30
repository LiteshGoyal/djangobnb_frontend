
import { getAccessToken, getUserId } from "../lib/actions";
import apiService from "../services/apiService";
import ProfileComponent from "../components/profile/ProfileComponent";

const MyProfile = async () => {
  const userId = await getUserId();

  if (!userId) {
    return <ProfileComponent user={null} />;
  }

  const user = await apiService.get(`/api/auth/profile/${userId}/`);

  return <ProfileComponent user={user} />;
};

export default MyProfile;