const UserProfile = ({params} : any) => {
  return (
    <div>
      <p className='text-4xl text-red-600'>
      UserProfile {params.id}
      </p>
      </div>
  )
}

export default UserProfile