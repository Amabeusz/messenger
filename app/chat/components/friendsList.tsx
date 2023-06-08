export default function FriendsList() {
  return (
    <div className="flex flex-col h-full">
      <FriendsListHeader />
      <div className="flex-grow bg-gray-700">Coming soon...</div>
    </div>
  );
}

function FriendsListHeader() {
  return (
    <div className="bg-gray-600 text-3xl text-center p-3.5">FriendsList</div>
  );
}
