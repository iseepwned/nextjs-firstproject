import Users from "@/src/components/Users"
async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}

async function HomePage() {
  const users = await fetchUsers()
  console.log(users)
  
  return ( 
    <Users className="hover:bg-slate-900 hover:cursor-pointer" users={users} />  
  );
}

export default HomePage;
