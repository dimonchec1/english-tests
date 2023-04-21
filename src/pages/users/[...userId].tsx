import { useRouter } from "next/router"

const UserProfile = () => {

    const router = useRouter()
    const {userId} = router.query

    return (
        <div>
            {userId}
        </div>
    )
}

export default UserProfile