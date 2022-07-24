import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
          ],
        }}
        height={400}
        width={600}
        //para evitar  scrollbar
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default BarChart;
