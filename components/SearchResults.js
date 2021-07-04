function SearchResults({results}) {
    return (
      <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 ">
      {results? <p className="text-gray-500 mb-5 mt-5 text-md  ">
          About {results.searchInformation?.formattedTotalResults} results(
          {results.searchInformation?.formattedSearchTime} seconds ){" "}
        </p>:null}
       
      </div>
    );
}

export default SearchResults
