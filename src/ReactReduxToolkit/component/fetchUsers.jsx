import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../rtk/user/userSlice"
export const Users = () => {
    const dispatch  = useDispatch();
    const a = useSelector(state => state.users)
    console.log(a)
    return (
        <button onClick={() => {
            dispatch(fetchUsers())
        }} >Fetch</button>
    )
}