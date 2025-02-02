import useFetch from "../hooks/useFetch";

const UsersDetail = () => {
  const fetchedData = useFetch(`https://reqres.in/api/users?page=1`); //&per_page=5
  // console.log("userDetails", fetchedData);
  const { resp, error, isLoading } = fetchedData;

  if (!error && !resp) return <h3>No data available</h3>; // Error boundary for empty response

  const { data } = resp;

  if (isLoading) return <h1>Loading.....</h1>;
  if (error) return <h3>Error: {error}</h3>;

  return (
    <>
      {data &&
        data?.map((user) => (
          <div key={user.id} className="outer">
            <h1>id: {user.id}</h1>
            <img src={user.avatar} className="img2" />
            <p>
              <b>Name: </b> {`${user.first_name} ${user.last_name}`} <br />
              <br />
              <b>Email: </b> {user.email}
            </p>
          </div>
        ))}
    </>
  );
};
export default UsersDetail;
