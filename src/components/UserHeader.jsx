import MiniHeader from "./MiniHeader";
import Divider from "./Divider";

function UserHeader({ user }) {
  return (
    <>
      <div className="mt-18 m-auto mb-11 flex w-11/12 cursor-pointer items-baseline text-center text-8xl font-bold">
        <div className="ml-3">{user}</div>
        <div className="flex h-fit text-6xl font-medium">의</div>
        <MiniHeader></MiniHeader>
      </div>
      <div className="m-auto flex w-11/12">
        <Divider></Divider>
      </div>
    </>
  );
}

export default UserHeader;
