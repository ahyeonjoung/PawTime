import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { fetchCurrentWeather } from '../network/currentWeather';
import { calculateWalkTime } from '../utils/time';

export const useCurrentWeather = (lat: number, lon: number) => {
  const { data, ...rest } = useQuery({
    queryKey: ['weather', lat, lon],
    queryFn: () => fetchCurrentWeather(lat, lon),
  });

  const calculateResult = useMemo(() => {
    if (!data) {
      return null;
    }
    return calculateWalkTime(data);
  }, [data]);

  return { calculateResult, data, ...rest };
};
