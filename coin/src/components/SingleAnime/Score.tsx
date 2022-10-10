export const Score = ({
  title,
  data,
}: {
  title: string;
  data: String | number | undefined | null;
}) => {
  return (
    <div className="flex flex-col font-bold text-right text-2xl">
      <span>{data}</span>
      <h1 className="text-gray-400">{title}</h1>
    </div>
  );
};
