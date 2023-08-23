import React, {useState} from 'react';

import {useApiList} from '../hooks';
import {ScreenContainer, DriverList, Pagination} from '../components';
import {ScreenDefaultProps} from '../types';
//import {logError, logData} from '../service';

export const ScreenDefault: React.FC<ScreenDefaultProps> = () => {
  const [page, setPage] = useState(1);
  const {mutate, data, error, isLoading} = useApiList(page);
  const onRefresh = () => mutate();
  //logError(isLoading, error);
  //logData(isLoading, error, data);

  return (
    <ScreenContainer load={isLoading} error={error} onRefresh={onRefresh}>
      {!!data?.list && <DriverList data={data?.list} />}
      {!!data?.count && (
        <Pagination
          page={page}
          count={data?.count}
          onPage={async num => setPage(num)}
        />
      )}
    </ScreenContainer>
  );
};
