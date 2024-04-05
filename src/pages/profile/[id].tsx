// TODO 특정 아이디에 해당하는 프로필 노출 페이지
// TODO 추후 3D 모델링을 통해 프로필을 더욱 다양하게 노출할 수 있도록 구현

function ProfileIdPage({id}: {id: string}){
    return <div>ProfileIdPage -- {id}</div>
}

export const getServerSideProps = async (context: any) => {
    const {id} = context.params
    return {
        props: {
            id
        }
    }
}

export default ProfileIdPage