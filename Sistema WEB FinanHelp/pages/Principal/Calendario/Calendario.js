import './style.css'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined';


const isWeekend = (date) => {
  const day = date.day();

  return day === 0 || day === 6;
};

export default function StaticDatePickerLandscape() {
  const [value, setValue] = React.useState(/*dayjs('2022-04-07')*/new Date());
  const [highlightedDays, /*setHighlightedDays*/] = React.useState([5, 8, 6]);

  return (
    <div style={{width: '50%', marginTop:"5%"}}>
      <LocalizationProvider dateAdapter={AdapterDayjs} >
        <StaticDatePicker
       
          orientation="portrait"
          openTo="day"
          value={value}
          shouldDisableDate={isWeekend}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
          renderDay={(day, _value, DayComponentProps) => {
            const isSelected =
              !DayComponentProps.outsideCurrentMonth &&
              highlightedDays.indexOf(day.date()) >= 0;

            return (
              <Badge

                key={day.toString()}
                overlap="circular"
                badgeContent={isSelected ? <Brightness1OutlinedIcon sx={{ fontSize: 40 }} /> : undefined}
              >
                <PickersDay style={{ backgroundColor: '#000', color: '#fff', fontSize:20, }} {...DayComponentProps} />
              </Badge>
            );
          }}
        />
      </LocalizationProvider>
    </div>
  );
}