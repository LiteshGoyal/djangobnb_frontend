import PropertyList from "../components/properties/PropertyList";
import { getUserId } from "../lib/actions";

const MyFavoritesPage = async () => {
  const userId = await getUserId();

  if (!userId) {
    return (
      <main className="max-w-[1550px] max-auto px-6 py-12">
        <p>You need to be authenticated...</p>
      </main>
    );
  } else {
    return (
      <main className="max-w-[1550px] max-auto px-6 pb-12">
        <h1 className="my-6 text-2xl">
          <strong> My Favorites</strong>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <PropertyList favorites={true} />
        </div>
      </main>
    );
  }
};

export default MyFavoritesPage;
