export function ProfileSection({userName,name}){
    return (
        <div>
          <img className="avatar-img " src={`https://unavatar.io/${userName}`} alt="Avatar" />
          <h2>{name}</h2>
        </div>
      );
    };