import * as React from 'react';
import { useDispatch } from 'react-redux'
import { fetchTransacionsOfPeriot } from 'redux/transaction/thunk';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import style from './DataFilter.module.scss'


export default function DataFilter() {
  const dispatch = useDispatch()

  const [dataStart, setDataStart] = React.useState(new Date().getMonth());
  const [dataEnd, setDataEnd] = React.useState(new Date().getFullYear());

  const handleChangeStart = (event) => {
    setDataStart(event.target.value);
  };

  const handleChangeEnd = (event) => {
    setDataEnd(event.target.value);
  };

  React.useEffect(() => {
    dispatch(fetchTransacionsOfPeriot({ dataStart, dataEnd }))
  }, [dispatch, dataStart, dataEnd])

  return (
    <div className={style.DataFilter }>
      <FormControl className={style.DataFilter__form }>
        <InputLabel id="dataStart">Month</InputLabel>
        <Select
          labelId=""
          id="dataStart"
          value={dataStart}
          onChange={handleChangeStart}
          label="Month"
        >
          <MenuItem value={1}>January</MenuItem>
          <MenuItem value={2}>February</MenuItem>
          <MenuItem value={3}>March</MenuItem>
          <MenuItem value={4}>April</MenuItem>
          <MenuItem value={5}>May</MenuItem>
          <MenuItem value={6}>June</MenuItem>
          <MenuItem value={7}>July</MenuItem>
          <MenuItem value={8}>August</MenuItem>
          <MenuItem value={9}>September</MenuItem>
          <MenuItem value={10}>October</MenuItem>
          <MenuItem value={11}>November</MenuItem>
          <MenuItem value={12}>December</MenuItem>
        </Select>
        </FormControl>

        <FormControl className={style.DataFilter__form }>
        <InputLabel id="dataEnd">Year</InputLabel>
        <Select
          labelId=""
          id="dataEnd"
          value={dataEnd}
          onChange={handleChangeEnd}
          label="Year"
        >
          <MenuItem value={2013}>2013</MenuItem>
          <MenuItem value={2014}>2014</MenuItem>
          <MenuItem value={2015}>2015</MenuItem>
          <MenuItem value={2016}>2016</MenuItem>
          <MenuItem value={2017}>2017</MenuItem>
          <MenuItem value={2018}>2018</MenuItem>
          <MenuItem value={2019}>2019</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2023}>2023</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}