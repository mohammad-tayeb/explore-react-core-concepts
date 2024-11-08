export default function User(user) {
    console.log(user)
    const {name,id} = user.user;
    return (
        <div className="box">
            <h4>User:{name} </h4>
            <h4>User Detail1: {id} </h4>
        </div>
    )
}