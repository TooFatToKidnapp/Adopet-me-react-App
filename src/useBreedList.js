import { useQuery } from "@tanstack/react-query";
import fetchBreadList from "./fetchBreadList.js";

function useBreedList(animal) {
  const res = useQuery(["breeds", animal], fetchBreadList);
  return [res?.data?.breeds ?? [], res.status];
}

export default useBreedList;
