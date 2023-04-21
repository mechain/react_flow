import { useGetUsersQuery , useGetPostMutation} from "../rtk/api/apiSlice";

export const RtkQuery = () => {
    const [getPost ] = useGetPostMutation()
  return (
    <>
      <button onClick={ async() => {
        console.log( await getPost("posts"))
      }}>RTK query</button>
    </>
  );
};
