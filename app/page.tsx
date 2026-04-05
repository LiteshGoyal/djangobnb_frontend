import Categories from "./components/Categories";
import PropertyList from "./components/properties/PropertyList";
export default function Home() {
  return (
    <main className=" max-w-[1500px] px-6 mx-auto">
      <Categories />
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <PropertyList />
      </div>
    </main>
  );
}
