import { useQuery } from "@tanstack/react-query";

const getRandomNumber = () => {
  return Promise.resolve(Math.random());
};

const Deduplication = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["randomNumber"],
    queryFn: getRandomNumber,
  });

  if (isLoading) return <div>Loading...</div>;

  return <div>Random Number is: {data}</div>;
};

export default Deduplication;
