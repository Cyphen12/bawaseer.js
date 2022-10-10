export const Table = ({
  title,
  animeData,
}: {
  title: string;
  animeData: String | number | undefined | null;
}) => {
  return (
    <>
      <div className="flex w-full items-center whitespace-nowrap py-4">
        <span className="pr-2 text-gray-400 ">{title}</span>
        <hr className="w-full px-1 bg-gray-400 " />
        <span className="pl-2 font-bold ">{animeData}</span>
      </div>
    </>
  );
};
