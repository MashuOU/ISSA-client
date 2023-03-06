// function convertToUnixTimestamp(timestamp) {
//   // const date = new Date(timestamp);
//   return Math.floor(Date.parse(timestamp) / 1000);
// }

// console.log(convertToUnixTimestamp('2023-03-05T09:32:48.156Z'));


const statuses = ['Hadir', 'Sakit', 'Alfa'];
const startDate = new Date('2023-01-01T00:00:00.000Z').getTime();
const endDate = new Date('2023-07-01T23:59:59.999Z').getTime();

const data = [];

let currentDate = startDate;
while (currentDate <= endDate) {
  const studentId = 2;
  const statusIndex = Math.floor(Math.random() * 3);
  const status = statuses[statusIndex];
  const createdAt = new Date(currentDate).toISOString();
  data.push({ studentId, status, createdAt });
  
  // tambahkan 1 hari ke currentDate
  currentDate += 24 * 60 * 60 * 1000;
}

const ope = []

data.forEach((each, index) => {
  if(index >= 100) {
    ope.push(each)
  }
})

console.log(ope);

[
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-01-01T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-01-02T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-01-03T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-01-04T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-01-05T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-01-06T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-01-07T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-01-08T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-01-09T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-01-10T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-01-11T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-01-12T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-01-13T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-01-14T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-01-15T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-01-16T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-01-17T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-01-18T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-01-19T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-01-20T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-01-21T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-01-22T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-01-23T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-01-24T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-01-25T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-01-26T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-01-27T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-01-28T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-01-29T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-01-30T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-01-31T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-02-01T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-02-02T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-02-03T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-02-04T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-02-05T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-02-06T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-02-07T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-02-08T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-02-09T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-02-10T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-02-11T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-02-12T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-02-13T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-02-14T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-02-15T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-02-16T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-02-17T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-02-18T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-02-19T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-02-20T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-02-21T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-02-22T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-02-23T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-02-24T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-02-25T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-02-26T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-02-27T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-02-28T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-03-01T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-03-02T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-03-03T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-03-04T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-03-05T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-03-06T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-03-07T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-03-08T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-03-09T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-03-10T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-03-11T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-03-12T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-03-13T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-03-14T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-03-15T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-03-16T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-03-17T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-03-18T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-03-19T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-03-20T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-03-21T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-03-22T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-03-23T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-03-24T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-03-25T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-03-26T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-03-27T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-03-28T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-03-29T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-03-30T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-03-31T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-04-01T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-04-02T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-04-03T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-04-04T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-04-05T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-04-06T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-04-07T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-04-08T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-04-09T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-04-10T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-04-11T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-04-12T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-04-13T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-04-14T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-04-15T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-04-16T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-04-17T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-04-18T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-04-19T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-04-20T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-04-21T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-04-22T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-04-23T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-04-24T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-04-25T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-04-26T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-04-27T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-04-28T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-04-29T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-04-30T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-05-01T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-05-02T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-05-03T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-05-04T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-05-05T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-05-06T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-05-07T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-05-08T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-05-09T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-05-10T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-05-11T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-05-12T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-05-13T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-05-14T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-05-15T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-05-16T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-05-17T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-05-18T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-05-19T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-05-20T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-05-21T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-05-22T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-05-23T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-05-24T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-05-25T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-05-26T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-05-27T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-05-28T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-05-29T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-05-30T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-05-31T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-06-01T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-06-02T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-06-03T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-06-04T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-06-05T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-06-06T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-06-07T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-06-08T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-06-09T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-06-10T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-06-11T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-06-12T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-06-13T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-06-14T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-06-15T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-06-16T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-06-17T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-06-18T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-06-19T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-06-20T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-06-21T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-06-22T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-06-23T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-06-24T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-06-25T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-06-26T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-06-27T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Hadir',
    createdAt: '2023-06-28T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Alfa',
    createdAt: '2023-06-29T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-06-30T00:00:00.000Z'
  },
  {
    studentId: 2,
    status: 'Sakit',
    createdAt: '2023-07-01T00:00:00.000Z'
  }
]
 
 