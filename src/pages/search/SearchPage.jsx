import React from "react";
import SearchCard from "../../components/searchCard/SearchCard";

function SearchPage() {
  return (
    <section className="p-6 flex flex-col gap-4 items-center">
      <SearchCard />
      <SearchCard />
      <SearchCard />
    </section>
  );
}

export default SearchPage;
