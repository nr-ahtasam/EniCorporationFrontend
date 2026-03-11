import axios from "axios";


async function getUsers() {
  
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  return res.data;
}

export default async function Users() {
  const users = await getUsers();

  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <div key={user.id} className="mb-4">
          <p className="font-semibold text-[red]">{user.name}</p>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      ))}
    </div>
  );
}