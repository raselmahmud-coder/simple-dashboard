const UsersPage = () => {
  return (
    <>
      <div className="bg-secondary shadow-md rounded-lg p-6 md:w-1/3 w-full mx-auto mt-12 md:mt-6">
        <img
          className="h-52 w-52 mx-auto mb-4"
          src="https://via.placeholder.com/64"
          alt="Card Icon"
        />
        <h1 className="text-xl font-semibold mb-2 capitalize">
          Welcome User page
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          maximus erat eu vestibulum.
        </p>
        <button className="mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-dark">
          Learn More
        </button>
      </div>
    </>
  );
};

export default UsersPage;
