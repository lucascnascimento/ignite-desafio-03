import { IconLabel } from "../IconLabel";

export const Profile = () => {
  return (
    <section className="flex py-32 px-40 gap-32 bg-base-profile rounded-[10px] shadow-profile-card">
      <img
        src="https://avatars.githubusercontent.com/u/43356441?v=4"
        alt=""
        className="w-[148px] h-[148px] rounded-lg"
      />
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1>Lucas Cordeiro</h1>
          <a>GITHUB</a>
        </div>
        <p className="">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div className="flex gap-24">
          <IconLabel icon={"gitHub"}>cameronwll</IconLabel>
          <IconLabel icon={"building"}>Rockteseat</IconLabel>
          <IconLabel icon={"userGroup"}>32 seguidores</IconLabel>
        </div>
      </div>
    </section>
  );
};
